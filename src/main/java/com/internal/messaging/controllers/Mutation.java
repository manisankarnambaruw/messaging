package com.internal.messaging.controllers;

import com.internal.messaging.domain.Room;
import com.internal.messaging.domain.User;
import com.internal.messaging.repository.RoomRepository;
import com.internal.messaging.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class Mutation {
    private final UserRepository userRepository;
    private final RoomRepository roomRepository;

    @MutationMapping
    public User createUser(@Argument String username) throws Exception {
        if (userRepository.existsByUsername(username)) {
            throw new Exception("Please choose another name");
        }
        return userRepository.save(User.builder().username(username).build());
    }

    @MutationMapping
    public Room createRoom(@Argument String roomName, @Argument String roomDesc) throws Exception {
        if (roomRepository.existsByRoomName(roomName)) {
            throw new Exception("Please choose another room name");
        }
        return roomRepository.save(Room.builder().roomName(roomName).roomDesc(roomDesc).build());
    }
}
