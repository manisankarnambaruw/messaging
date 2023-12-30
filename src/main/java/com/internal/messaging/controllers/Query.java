package com.internal.messaging.controllers;

import com.internal.messaging.domain.Room;
import com.internal.messaging.repository.RoomRepository;
import com.internal.messaging.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequiredArgsConstructor
public class Query {

    private final UserRepository userRepository;
    private final RoomRepository roomRepository;

    @QueryMapping
    public List<Room> rooms() {
        return roomRepository.findAll().stream().limit(10).collect(Collectors.toList());
    }
}
