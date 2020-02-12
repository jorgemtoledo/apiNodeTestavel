class LeadsController {

  get(req, res) {
    return res.send([{
      email: 'maria@mail.com.br'
    }])
  }
}

export default LeadsController;