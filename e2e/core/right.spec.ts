import { appTest, chaiRequest } from '../common';
import { cleanRightsDatabase, rightsMock } from './common';

describe('Right', () => {

    before(() => appTest.startUp());

    after(() => appTest.shutDown());

    afterEach(() => cleanRightsDatabase());

    describe('POST /rights', () => {
        it('should return right id', async () => {
            const res: any = await chaiRequest
                .post('/rights')
                .send(rightsMock[0]);

            res.body.should.be.not.empty;
        });
    });

    describe('GET /rights/:id', () => {
        let rightId: string;

        before(async () => {
            const res: any = await chaiRequest
                .post('/rights')
                .send(rightsMock[0]);
            rightId = res.body;
        });

        it('should return right', async () => {
            const res: any = await chaiRequest
                .get(`/rights/${rightId}`);
            const right: any = res.body;

            right.should.have.all.keys('code', 'description');
        });

    });

});