import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);

describe('App test', () => {
  it('should generate 10 new phone numbers', async () => {
    const response = await chai.request(app)
        .post('/api/v1/generate-numbers')
        .send({ totalPhoneNumbersToGenerate: 10 })
        .set('Accept', 'application/json');
    
    expect(response.status).to.equal(201);
    expect(response.body.success).to.equal(true);
    expect(response.body.generatedNumberData).to.exist;
    expect(response.body.message).to.equal('Phone numbers generated successfully');
    expect(response.body.generatedNumberData.totalPhoneNumbersGenerated).to.equal(10);
  });

  it('should not generate more than 10000 phone numbers even if a larger value is given', async () => {
    const response = await chai.request(app)
        .post('/api/v1/generate-numbers')
        .send({ totalPhoneNumbersToGenerate: 500000 })
        .set('Accept', 'application/json');
    
    expect(response.status).to.equal(201);
    expect(response.body.success).to.equal(true);
    expect(response.body.generatedNumberData).to.exist;
    expect(response.body.generatedNumberData.totalPhoneNumbersGenerated).to.equal(10000);
  });

  it('should get all saved filenames', async () => {
    const response = await chai.request(app)
        .get('/api/v1/get-saved-filenames')
        .send()
        .set('Accept', 'application/json');
    
    expect(response.status).to.equal(200);
    expect(response.body.success).to.equal(true);
    expect(response.body.filenames).to.exist;
  });

  it('should get details of a file', async () => {
    const filenames = await chai.request(app)
    .get('/api/v1/get-saved-filenames')
    .send()
    .set('Accept', 'application/json');
    const response = await chai.request(app)
        .get(`/api/v1/get-file-details/${filenames.body.filenames[0]}`)
        .send()
        .set('Accept', 'application/json');
    
    expect(response.status).to.equal(200);
    expect(response.body.success).to.equal(true);
    expect(response.body.fileDetails).to.exist;
  });

  it('should not get details of a file that does not exist', async () => {
    const response = await chai.request(app)
        .get(`/api/v1/get-file-details/sds232`)
        .send()
        .set('Accept', 'application/json');
    
    expect(response.status).to.equal(404);
    expect(response.body.success).to.equal(false);
    expect(response.body.fileDetails).to.not.exist;
  });
});
