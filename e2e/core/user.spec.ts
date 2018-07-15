import { appTest, chaiRequest } from '../common';
import {
    cleanProfilesDatabase,
    cleanRightsDatabase,
    cleanUsersDatabase,
    profilesMock,
    rightsMock,
    usersMock
} from './common';
import { AddRightCommand } from '../../src/core/commands/addright/AddRightCommand';
import { AddProfileCommand } from '../../src/core/commands/addprofile/AddProfileCommand';
import { UserView } from '../../src/core/readmodel/UserView';

describe('User', () => {

    before(() => appTest.startUp());

    after(() => appTest.shutDown());

    afterEach(() => cleanUsersDatabase());

    describe('POST /users', () => {
        it('should return user id', async () => {
            const res: any = await chaiRequest
                .post('/users')
                .send(usersMock[0]);

            res.body.should.be.not.empty;
        });
    });

    describe('GET /users/:id', () => {
        let userId: string;

        before(async () => {
            const res: any = await chaiRequest
                .post('/users')
                .send(usersMock[0]);
            userId = res.body;
        });

        it('should return user', async () => {
            const res: any = await chaiRequest
                .get(`/users/${userId}`);
            const user: any = res.body;

            user.should.have.all.keys('firstName', 'lastName', 'email', 'profilesIds');
        });

    });

    describe('PUT /users/:id', () => {
        let userId: string;
        let profilesIds: string[];

        before(async () => {
            userId = await chaiRequest
                .post('/users')
                .send(usersMock[0])
                .then((res: any) => res.body as string);

            const addProfilesPromises: Promise[] = profilesMock.map(async (profile: AddProfileCommand) => {
                return await chaiRequest
                    .post('/profiles')
                    .send(profile)
                    .then((res: any) => res.body as string);
            });

            profilesIds = await Promise.all(addProfilesPromises);
        });

        after(async () => await cleanProfilesDatabase());

        it('should modify user', async () => {
            const userChanges = {
                firstName: 'John',
                lastName: 'First',
                password: 'New password',
                profilesChange: {
                    added: profilesIds
                }
            };

            await chaiRequest
                .put(`/users/${userId}`)
                .send(userChanges);

            const userAfterChanges: UserView = await chaiRequest
                .get(`/users/${userId}`)
                .then((res: any) =>  res.body as UserView);

            userAfterChanges.firstName.should.equal(userChanges.firstName);
            userAfterChanges.lastName.should.equal(userChanges.lastName);
            userAfterChanges.profilesIds.should.deep.equal(userChanges.profilesChange.added);
        });
    });

});