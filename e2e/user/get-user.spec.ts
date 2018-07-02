import * as chai from 'chai';

import { chaiRequest } from '../common/chai-request';
import users from './data/users.data';
import { UserAppTest } from '../common/user-app.test';
import { appTest } from '../common/app-test';

chai.should();


describe('GET /users/:id', () => {
    let userId;

    before(async () => {
        await appTest.startUp();
        const res: any = await chaiRequest
            .post('/users')
            .send(users[0]);
        userId = res.body.id;
    });

    after(async () => {
        await UserAppTest.cleanDatabase();
        await appTest.shutDown();
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