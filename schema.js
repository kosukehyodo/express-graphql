const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Member {
    name: String
    gender: String
  }

  type Query {
    members(
      first: Int,
      name: String,
      gender: String
    ): [Member],
  }

  type Mutation {
    addMember(name: String!, gender: String! ): Member
  }
`);

module.exports = schema;
