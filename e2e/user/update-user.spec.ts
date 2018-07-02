import * as chai from 'chai';
import { OK } from 'http-status';
import users from './data/users.data';
import { chaiRequest } from '../common/chai-request';
import { UserAppTest } from '../common/user-app.test';
import { appTest } from '../common/app-test';


chai.should();


describe('PUT /users/:id', () => {
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

    it('should return ok status', async () => {
        const res: any = await chaiRequest
            .put(`/users/${userId}`)
            .send({
                firstName: 'David'
            });
        res.should.have.status(OK);
    });

});