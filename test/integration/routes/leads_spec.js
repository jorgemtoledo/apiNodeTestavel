import Lead from '../../../src/models/lead';

describe("Routes: Leads", () => {
  let request;
  let app;

  before(async () => {
    app = await setupApp();
    request = supertest(app);
  });

  after(async () => await app.database.connection.close());

  const defaultLead = {
    email: 'maria@mail.com.br'
  };

  const expectedLead = { 
    __v:0,
    _id: '56cb91bdc3464f14678934ca',
    email: 'maria@mail.com.br'
  };

  beforeEach(async() => {
    await Lead.deleteMany();
    const lead = new Lead(defaultLead);
    lead._id = '56cb91bdc3464f14678934ca';
    return await lead.save();
  });

  afterEach(async() => await Lead.deleteMany());

  describe("GET /leads", () => {
    it("should return a list of leads", done => {
      request.get("/leads").end((err, res) => {
        expect(res.body).to.eql([expectedLead]);
        done(err);
      });
    });
  });
});