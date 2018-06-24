import * as chai from 'chai';

import { chaiRequest } from './shared/chai-request';
import users from './data/users.data';
import { app } from '../src/app';
import { UserAppTest } from './shared/user-app.test';

chai.should();


describe('Create user', () => {

    before(() => {
        return app.startUp();
    });

    after(async () => {
        await UserAppTest.cleanDatabase();
        await app.shutDown();
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