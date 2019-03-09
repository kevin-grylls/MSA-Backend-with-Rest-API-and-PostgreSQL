const select = (req, res) => res.status(200).send("Read Successfully");

const insert = (req, res) => res.status(201).send("Created Successfully");

const update = (req, res) => res.status(200).send("Updated Successfully");

const remove = (req, res) => res.status(200).send("Deleted Successfully");

module.exports = {
  select,
  insert,
  update,
  remove
};
