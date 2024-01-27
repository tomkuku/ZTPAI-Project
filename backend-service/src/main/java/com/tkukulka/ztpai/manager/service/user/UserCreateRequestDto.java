package com.tkukulka.ztpai.manager.service.user;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor(access = AccessLevel.PACKAGE)
class UserCreateRequestDto {

    private final String firstname;

    private final String lastname;

    private final String password;

    private final String email;

    private final Long type;

    public UserCreateRequestDto() {
        this.firstname = null;
        this.lastname = null;
        this.password = null;
        this.email = null;
        this.type = null;
    }
}
