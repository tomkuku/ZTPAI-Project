package com.tkukulka.ztpai.manager.service.user;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

@Service
@RequiredArgsConstructor(access = AccessLevel.PACKAGE)
class UserServiceImpl {

    private final UserRepository userRepository;

    UserDto createUser(UserCreateRequestDto userDto) {
        var userEntity = UserEntity.from(userDto);
        var savedUserEntity = userRepository.save(userEntity);
        return UserDto.from(savedUserEntity);
    }

    UserDto getUserById(Long id) {
        UserEntity userEntity = findEntityByIdOrThrowException(id);
        return UserDto.from(userEntity);
    }

    private UserEntity findEntityByIdOrThrowException(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("User with id=%s not found".formatted(id)));
    }
}
