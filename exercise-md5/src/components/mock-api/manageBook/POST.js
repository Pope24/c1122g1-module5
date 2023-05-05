module.exports = (req, res) => {
  return res.status(201).send({
    id: req.body.id,
    title: req.body.title,
    quantity: req.body.quantity,
  });
};
