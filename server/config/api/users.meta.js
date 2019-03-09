module.exports = {
  name: "Object",
  description:
    "This JSON Schema defines the paramaters required to handle an object",
  properties: {
    id: {
      title: "id",
      description: "Object Id",
      type: "string"
    },
    name: {
      title: "name",
      description: "Object Name",
      type: "string",
      maxLength: 32,
      required: true
    }
  }
};
