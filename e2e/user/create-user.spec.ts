import * as chai from 'chai';

import { chaiRequest } from '../common/chai-request';
import users from './data/users.data';

import { UserAppTest } from '../common/user-app.test';
import { appTest } from '../common/app-test';

chai.should();


describe('POST /users', () => {

    before(() => {
        return appTest.startUp();
    });

    after(async () => {
        await UserAppTest.cleanDatabase();
        await appTest.shutDown();
    });

    it('should return created user id', async () => {
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