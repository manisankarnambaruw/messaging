import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Header, Icon, Segment } from "semantic-ui-react";

const ADD_ROOM = gql`
  mutation createRoom($roomName: String!, $roomDesc: String) {
    createRoom(roomName: $roomName, roomDesc: $roomDesc) {
      id
      roomName
      roomDesc
    }
  }
`;

const QUERY_ROOMS = gql`
  query {
    rooms {
      id
      roomName
      roomDesc
    }
  }
`;

export default function Rooms() {
  const [roomName, setRoomName] = useState("");
  const [roomDesc, setRoomDesc] = useState("");
  const [addRoom, { data: roomData }] = useMutation(ADD_ROOM);
  const { data, refetch } = useQuery(QUERY_ROOMS);
  const navigate = useNavigate();

  useEffect(() => {
    if (!!roomData) {
      refetch();
    }
  }, [roomData]);

  return (
    <Container style={{ paddingTop: "30px" }}>
      <Segment>
        <Form
          onSubmit={() => {
            if (
              !!roomName &&
              !data?.rooms?.find((r) => r.roomName === roomName)
            ) {
              addRoom({ variables: { roomName, roomDesc } });
            }
          }}
        >
          <Form.Group>
            <Form.Input
              placeholder="Room Name"
              value={roomName}
              onChange={({ target: { value } }) => setRoomName(value)}
              width={5}
            />
            <Form.Input
              placeholder="Room Description"
              value={roomDesc}
              onChange={({ target: { value } }) => setRoomDesc(value)}
              width={5}
            />
            <Form.Button type="submit">
              <Icon name="add" /> Add
            </Form.Button>
          </Form.Group>
        </Form>

        {data?.rooms?.map((r) => (
          <Segment
            inverted
            key={`room-${r.id}`}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/app/${r.id}`)}
          >
            <Header>{r.roomName}</Header>
            <p>{r.roomDesc}</p>
          </Segment>
        ))}
      </Segment>
    </Container>
  );
}
