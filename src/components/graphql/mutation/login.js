import gql from "graphql-tag";

const login = gql`
  mutation signinUser($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        admin
        document
        email
        id
        lastname
        name
        address {
          complement
          id
          name
          neighborhood
          number
          state
          street
        }
        order {
          id
          items {
            id
            image
            listPrice
            name
            price
            quantity
          }
          total
        }
      }
    }
  }
`;

export { login };
