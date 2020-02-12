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

  describe("GET /leads", () => {
    it("should return a list of leads", done => {
      request.get("/leads").end((err, res) => {
        expect(res.body[0]).to.eql(defaultLead);
        done(err);
      });
    });
  });
});