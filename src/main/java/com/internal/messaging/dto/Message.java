package com.internal.messaging.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Message {
    private String from;
    private String messageType;
    private String content;
}
