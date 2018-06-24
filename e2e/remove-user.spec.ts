import * as chai from 'chai';
import { NO_CONTENT } from 'http-status';
import { chaiRequest } from './shared/chai-request';
import users from './data/users.data';
import { UserAppTest } from './shared/user-app.test';
import { app } from '../src/app';


chai.should();


describe('Remove user', () => {
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

    it('should return no content status', async () => {
        const res: any = await chaiRequest
            .del(`/users/${userId}`);
        res.should.have.status(NO_CONTENT)
    });

});