package com.internal.messaging.controllers;

import com.internal.messaging.dto.Message;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {
    @MessageMapping("/chat/{roomId}")
    @SendTo("/topic/messages/{roomId}")
    public Message send(final Message message, @DestinationVariable Long roomId) throws Exception {
        return message;
    }
}
