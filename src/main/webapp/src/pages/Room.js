import React, { useCallback, useEffect, useState } from "react";
import { Container, Form, Header, Segment } from "semantic-ui-react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { useParams } from "react-router-dom";
import { localStorageKey } from "../constants";

export default function Room() {
  const [messages, setMessages] = useState([]);
  const { id } = useParams();
  const [stpClient, setStpClient] = useState(null);
  const [message, setMessage] = useState("");
  const [connected, setConnected] = useState(false);

  const handleSendMessage = useCallback(
    (message) => {
      stpClient.send(
        "/app/chat/" + id,
        {},
        JSON.stringify({
          from: localStorage.getItem(localStorageKey),
          content: message,
        })
      );
      setMessage("");
    },
    [stpClient]
  );
  useEffect(() => {
    const socket = new SockJS("/chat");
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, function (frame) {
      setConnected(true);
      console.log("Connected: " + frame);
      stompClient.subscribe("/topic/messages/" + id, function (messageOutput) {
        setMessages((m) => [
          ...m,
          JSON.parse(new TextDecoder().decode(messageOutput._binaryBody)),
        ]);
      });
    });

    setStpClient(stompClient);
    return () => stompClient.disconnect();
  }, []);
  return (
    <Container
      style={{ paddingTop: "20px", paddingBottom: "20px", height: "100vh" }}
    >
      <Segment attached="bottom" style={{ height: "100%" }}>
        <Header attached="top">
          {connected ? "Connected" : "Disconnected"}
        </Header>
        <Segment attached="bottom" style={{ height: "80%", overflowY: "auto" }}>
          {messages.map((m, index) => (
            <p key={`messages-${index}`}>
              {m.from}: {m.content}
            </p>
          ))}
        </Segment>
        <Form onSubmit={() => {}} style={{ justifySelf: "flex-end" }}>
          <Form.Group>
            <Form.Input
              value={message}
              onChange={({ target: { value } }) => setMessage(value)}
            />
            <Form.Button
              type="submit"
              onClick={() => handleSendMessage(message)}
            >
              Submit
            </Form.Button>
          </Form.Group>
        </Form>
      </Segment>
    </Container>
  );
}
