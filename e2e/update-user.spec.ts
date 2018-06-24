import * as chai from 'chai';
import { OK } from 'http-status';
import users from './data/users.data';
import { chaiRequest } from './shared/chai-request';
import { UserAppTest } from './shared/user-app.test';
import { app } from '../src/app';

chai.should();


describe('Update user', () => {
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

    it('should return ok status', async () => {
        const res: any = await chaiRequest
            .put(`/users/${userId}`)
            .send({
                firstName: 'David'
            });
        res.should.have.status(OK);
    });

});