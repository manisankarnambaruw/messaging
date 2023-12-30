import React, { useEffect, useState } from "react";
import { Header, Segment, Container, Form, Message } from "semantic-ui-react";
import { gql, useMutation } from "@apollo/client";
import { localStorageKey } from "../constants";
import { useNavigate } from "react-router-dom";

const ADD_USER = gql`
  mutation createUser($username: String!) {
    createUser(username: $username) {
      id
      username
    }
  }
`;

export default function LandingPage(props) {
  const [username, setUsername] = useState("");
  const [addUser, { data, loading, error }] = useMutation(ADD_USER);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!!username) {
      addUser({ variables: { username } });
    }
  };

  useEffect(() => {
    if (!!data && !!data?.createUser) {
      localStorage.setItem(localStorageKey, data?.createUser?.username);
      navigate("/app");
    }
  }, [data]);

  return (
    <Container style={{ height: "100vh", paddingTop: "100px" }}>
      <Header attached="top">Enter User Name</Header>
      <Segment attached="bottom">
        <Form onSubmit={handleSubmit}>
          <Form.Input
            value={username}
            onChange={({ target: { value } }) => setUsername(value)}
            error={!!error}
          />
          {!!error && (
            <Message negative>
              <Message.Header>Error, Could you check something!</Message.Header>
              <Message.List>
                <Message.Item>Choose a different username</Message.Item>
                <Message.Item>Users might reached exhaust limit</Message.Item>
              </Message.List>
            </Message>
          )}
          <Form.Button type="submit">Submit</Form.Button>
        </Form>
      </Segment>
    </Container>
  );
}
