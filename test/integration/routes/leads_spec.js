describe('Routes: Leads', () => {
  const defaultLead = {
    email: 'maria@mail.com.br'
  };

  describe('GET /leads', () => {
    it('should return a list of leads', done => {

      request
        .get('/leads')
        .end((err, res) => {
          expect(res.body[0]).to.eql(defaultLead);
          done(err);
        });
    });
  });
});