import { appTest, chaiRequest } from '../common';
import { cleanUsersDatabase, usersMock } from './common';

describe('Users', () => {

    before(() => appTest.startUp());

    after(() => appTest.shutDown());

    afterEach(() => cleanUsersDatabase());

    describe('POST /users', () => {
        it('should return user', async () => {
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

            user.should.have.all.keys('firstName', 'lastName', 'email');
        });

    });

});