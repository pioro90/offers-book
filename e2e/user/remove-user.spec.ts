import * as chai from 'chai';
import { NO_CONTENT } from 'http-status';
import { chaiRequest } from '../common/chai-request';
import users from './data/users.data';
import { UserAppTest } from '../common/user-app.test';
import { appTest } from '../common/app-test';


chai.should();


describe('DELETE /users/:id', () => {
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

    it('should return no content status', async () => {
        const res: any = await chaiRequest
            .del(`/users/${userId}`);
        res.should.have.status(NO_CONTENT)
    });

});