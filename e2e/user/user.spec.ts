import * as chai from 'chai';

import { chaiRequest } from '../common/chai-request';
import users from './common/users.data';

import cleanDatabase from './common/clean-database';
import { appTest } from '../common/app-test';
import { NO_CONTENT, OK } from 'http-status';

chai.should();

describe('Users', () => {

    before(() => appTest.startUp());

    after(() => appTest.shutDown());

    afterEach(() => cleanDatabase());

    describe('POST /users', () => {
        it('should return created user', async () => {
            const res: any = await chaiRequest
                .post('/users')
                .send(users[0]);

            res.body.should.have.all.keys('createdAt',
                'email',
                'firstName',
                'id',
                'lastName',
                'password',
                'updatedAt');
        });
    });

    describe('GET /users', () => {
        before(() => {
            return Promise.all(users.map(user => {
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
                .send(users[0]);
            userId = res.body.id;
        });

        it('should return user', async () => {
            const res: any = await chaiRequest
                .get(`/users/${userId}`);
            const user: any = res.body;

            user.should.have.all.keys(
                'id',
                'updatedAt',
                'createdAt',
                'firstName',
                'lastName',
                'password',
                'email'
            );
        });

    });

    describe('DELETE /users/:id', () => {
        let userId: string;

        before(async () => {
            const res: any = await chaiRequest
                .post('/users')
                .send(users[0]);
            userId = res.body.id;
        });

        it('should return no content status', async () => {
            const res: any = await chaiRequest
                .del(`/users/${userId}`);
            res.should.have.status(NO_CONTENT)
        });
    });

    describe('PUT /users/:id', () => {
        let userId: string;

        before(async () => {
            const res: any = await chaiRequest
                .post('/users')
                .send(users[0]);
            userId = res.body.id;
        });

        it('should return ok status', async () => {
            const res: any = await chaiRequest
                .put(`/users/${userId}`)
                .send({
                    firstName: 'David'
                });
            res.should.have.status(OK);
        });
    });

});