import { appTest, chaiRequest } from '../common';
import { cleanProfilesDatabase, cleanRightsDatabase, profilesMock, rightsMock } from './common';
import { AddRightCommand } from '../../src/core/commands/addright/AddRightCommand';
import { ProfileView } from '../../src/core/readmodel/ProfileView';

describe('Profile', () => {

    before(() => appTest.startUp());

    after(async () => await appTest.shutDown());

    afterEach( async () => await cleanProfilesDatabase());

    describe('POST /profiles', () => {
        it('should return profile id', async () => {
            const res: any = await chaiRequest
                .post('/profiles')
                .send(profilesMock[0]);

            res.body.should.be.not.empty;
        });
    });

    describe('GET /profiles/:id', () => {
        let profileId: string;

        before(async () => {
            const res: any = await chaiRequest
                .post('/profiles')
                .send(profilesMock[0]);
            profileId = res.body;
        });

        it('should return profile', async () => {
            const res: any = await chaiRequest
                .get(`/profiles/${profileId}`);
            const profile: any = res.body;

            profile.should.have.all.keys('name', 'rightsIds');
        });

    });

    describe('POST /profiles/:id/rights', () => {
        let profileId: string;
        let rightsIds: string[];

        before(async () => {
            const profileRes: any = await chaiRequest
                .post('/profiles')
                .send(profilesMock[0]);
            profileId = profileRes.body;

            const addRightsPromises: Promise[] = rightsMock.map(async (right: AddRightCommand) => {
                const res: any = await chaiRequest
                    .post('/rights')
                    .send(right);
                return res.body;
            });

            rightsIds = await Promise.all(addRightsPromises);
        });

        after(async () => await cleanRightsDatabase());

        it('should add rights to profile', async () => {
            await chaiRequest
                .post(`/profiles/${profileId}/rights`)
                .send({rightsIds});
            const profiles: ProfileView = await chaiRequest
                .get(`/profiles/${profileId}`)
                .then((res: any) => res.body as ProfileView);

            profiles.rightsIds.should.have.length(2);
        });
    });

});