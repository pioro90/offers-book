import { appTest, chaiRequest } from '../common';
import cleanCategoriesDatabase from './common/cleanCategoriesDatabase';
import * as httpStatus from 'http-status';
import categoriesMock from './common/categoriesMock';


describe('Categories', () => {

    before(() => appTest.startUp());

    after(() => appTest.shutDown());

    afterEach(() => cleanCategoriesDatabase());

    describe('POST /categories', () => {

        it('should return category', async () => {
            const res: any = await chaiRequest
                .post('/categories')
                .send(categoriesMock[0]);
            res.should.have.status(httpStatus.CREATED);
            res.body.should.have.all.keys('ancestors',
                'createdAt',
                'description',
                'name',
                'updatedAt');
        });
    })

});