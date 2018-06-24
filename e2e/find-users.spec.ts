import * as chai from 'chai';

import users from './data/users.data';
import { chaiRequest } from './shared/chai-request';
import { UserAppTest } from './shared/user-app.test';
import { app } from '../src/app';

chai.should();


describe('Find users', () => {

    before(async () => {
        await app.startUp();
        await Promise.all(users.map(user => {
            return chaiRequest
                .post('/users')
                .send(user)
        }));
    });

    after(async () => {
        await UserAppTest.cleanDatabase();
        await app.shutDown();
    });


    it('should return one user', async () => {
        const res: any = await chaiRequest
            .get('/users')
            .query({
                start: 0,
                limit: 1
            });
        const users: any = res.body;
        users.should.have.lengthOf(1);
        users[0].should.have.all.keys(
            'id',
            'createdAt',
            'email',
            'firstName',
            'lastName',
            'updatedAt'
        );
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

    it('should return all users filtered by first name = \'mich\'', async () => {
        const res: any = await chaiRequest
            .get('/users')
            .query({
                firstName: 'mich',
                start: 0,
                limit: 100
            });
        const users: any = res.body;
        users.should.be.an('array').that.have.lengthOf(2);
    })

});