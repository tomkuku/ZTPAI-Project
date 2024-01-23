package com.tkukulka.ztpai.manager.service.user;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldNameConstants;

@Getter
@RequiredArgsConstructor(access = AccessLevel.PACKAGE)
class UserDto {

    private final Long id;

    private final String firstname;

    private final String lastname;

    private final String email;

    private final String password;

    private final Long type;

    static UserDto from(UserEntity entity) {
        return UserMapper.INSTANCE.toUserDto(entity);
    }
}
