import * as httpStatus from 'http-status';

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

            res.body.should.have.all.keys('email',
                'firstName',
                'id',
                'lastName',
                'password');
        });
    });

    describe('GET /users', () => {
        before(() => {
            return Promise.all(usersMock.map(user => {
                return chaiRequest
                    .post('/users')
                    .send(user)
            }));
        });

        it('should return users', async () => {
            const res: any = await chaiRequest
                .get('/users')
                .query({
                    start: 0,
                    limit: 100
                });
            const users: any = res.body;
            users.should.be.an('array').that.have.lengthOf(4);
        });
    });

    describe('GET /users/:id', () => {
        let userId: string;

        before(async () => {
            const res: any = await chaiRequest
                .post('/users')
                .send(usersMock[0]);
            userId = res.body.id;
        });

        it('should return user', async () => {
            const res: any = await chaiRequest
                .get(`/users/${userId}`);
            const user: any = res.body;

            user.should.have.all.keys('id',
                'firstName',
                'lastName',
                'password',
                'email');
        });

    });

    describe('PUT /users/:id', () => {
        let userId: string;

        before(async () => {
            const res: any = await chaiRequest
                .post('/users')
                .send(usersMock[0]);
            userId = res.body.id;
        });

        it('should return ok status', async () => {
            const res: any = await chaiRequest
                .put(`/users/${userId}`)
                .send({
                    firstName: 'David'
                });
            res.should.have.status(httpStatus.OK);
        });
    });

});