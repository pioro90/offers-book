import { appTest, chaiRequest } from '../common';
import cleanCategoriesDatabase from './common/cleanCategoriesDatabase';
import * as httpStatus from 'http-status';
import categoriesMock from './common/categoriesMock';
import { Category } from '../../src/category/core/domain/Category';


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
                'id',
                'name',
                'updatedAt');
        });
    });

    describe('POST /categories/:id', () => {
        let parentCategoryId: string;

        before(async () => {
            const res: any = await chaiRequest
                .post('/categories')
                .send(categoriesMock[0]);
            parentCategoryId = res.body.id;
        });

        it('should return subcategory', async () => {
            const res: any = await chaiRequest
                .post(`/categories/${parentCategoryId}`)
                .send(categoriesMock[1]);
            const subcategory: Category = res.body;

            subcategory.should.have.all.keys('ancestors',
                'createdAt',
                'description',
                'id',
                'parent',
                'name',
                'updatedAt');
            subcategory.parent.should.equal(parentCategoryId);
            subcategory.ancestors.should.have.lengthOf(1);
            subcategory.ancestors.should.deep.equal([parentCategoryId]);
        });
    });

    describe('GET /categories/:id', () => {
        let categoryId: string;

        before(async () => {
            const res: any = await chaiRequest
                .post('/categories')
                .send(categoriesMock[0]);
            categoryId = res.body.id;
        });

        it('should return category', async () => {
            const res: any = await chaiRequest
                .get(`/categories/${categoryId}`);
            res.body.should.have.all.keys(
                'name',
                'id',
                'ancestors',
                'description',
                'createdAt',
                'updatedAt'
            )
        });
    });

});