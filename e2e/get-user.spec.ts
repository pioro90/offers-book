import * as chai from 'chai';

import { chaiRequest } from './shared/chai-request';
import users from './data/users.data';
import { UserAppTest } from './shared/user-app.test';
import { app } from '../src/app';

chai.should();


describe('Get user', () => {
    let userId;

    before(async () => {
        await app.startUp();
        const res: any = await chaiRequest
            .post('/users')
            .send(users[0]);
        userId = res.body.id;
    });

    after(async () => {
        await UserAppTest.cleanDatabase();
        await app.shutDown();
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