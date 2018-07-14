import { appTest, chaiRequest } from '../common';
import { cleanProfilesDatabase, profilesMock } from './common';

describe('Profile', () => {

    before(() => appTest.startUp());

    after(() => appTest.shutDown());

    afterEach(() => cleanProfilesDatabase());

    describe('POST /profiles', () => {
        it('should return profile id', async () => {
            const res: any = await chaiRequest
                .post('/profiles')
                .send(profilesMock[0]);

            res.body.should.be.not.empty;
        });
    });

    describe('GET /profiles/:id', () => {
        let profileId: string;

        before(async () => {
            const res: any = await chaiRequest
                .post('/profiles')
                .send(profilesMock[0]);
            profileId = res.body;
        });

        it('should return profile', async () => {
            const res: any = await chaiRequest
                .get(`/profiles/${profileId}`);
            const profile: any = res.body;

            profile.should.have.all.keys('name', 'rightsIds');
        });

    });

});