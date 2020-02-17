import LeadsController from '../../../src/controllers/leads';
import sinon from 'sinon';
import Lead from '../../../src/models/lead';

describe('Controllers: Leads', () => {

  const defaultLead = [{
    email: 'maria@mail.com.br',
  }];

  describe('get() leads', () => {
    it('should return a list of leads', async () => {
      const request = {};
      const response = {
        send: sinon.spy()
      };

      Lead.find = sinon.stub();
      Lead.find.withArgs({}).resolves(defaultLead);

      const leadsController = new LeadsController(Lead);

      await leadsController.get(request, response);

      sinon.assert.calledWith(response.send, defaultLead);
    });

    it('should return 400 when an error occurs', async () => {
      const request = {};
      const response = {
        send: sinon.spy(),
        status: sinon.stub()
      };

      response.status.withArgs(400).returns(response);
      Lead.find = sinon.stub();
      Lead.find.withArgs({}).rejects({ message: 'Error' });

      const leadsController = new LeadsController(Lead);

      await leadsController.get(request, response);

      sinon.assert.calledWith(response.send, 'Error');
    });
  });
});