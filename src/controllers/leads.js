class LeadsController {

  constructor(Lead) {
    this.Lead = Lead;
  };

  async get(req, res) {
    try {
      const leads = await this.Lead.find({});
      res.send(leads);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}

export default LeadsController;