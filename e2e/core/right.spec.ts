import { appTest, chaiRequest } from '../common';
import { cleanRightsDatabase, rightsMock } from './common';
import { RightView } from '../../src/core/readmodel/RightView';
import { ModifyRightCommand } from '../../src/core/commands/modifyright/ModifyRightCommand';

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

    describe('PUT /rights/:id', () => {
        let rightId: string;

        before(async () => {
            rightId = await chaiRequest
                .post('/rights')
                .send(rightsMock[0])
                .then((res: any) => res.body as string);
        });

        it('should update right', async () => {
            const modifiedRight = {
                code: 'RIGHT_C',
                description: 'DESC_C'
            };

            await chaiRequest
                .put(`/rights/${rightId}`)
                .send(modifiedRight);

            const right: RightView = await chaiRequest
                .get(`/rights/${rightId}`)
                .then((res: any) => res.body as RightView);


            right.code.should.equal(modifiedRight.code);
            right.description.should.equal(modifiedRight.description);
        });

    })

});