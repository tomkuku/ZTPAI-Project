package com.tkukulka.ztpai.manager.service.user;

import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-01-20T09:08:57+0100",
    comments = "version: 1.5.5.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.2.1.jar, environment: Java 19.0.2 (Amazon.com Inc.)"
)
class UserMapperImpl extends UserMapper {

    @Override
    UserEntity toEntity(UserCreateRequestDto createRequestDto) {
        if ( createRequestDto == null ) {
            return null;
        }

        UserEntity userEntity = new UserEntity();

        userEntity.setEmail( createRequestDto.getEmail() );
        userEntity.setPassword( createRequestDto.getPassword() );
        userEntity.setType( createRequestDto.getType() );

        return userEntity;
    }

    @Override
    UserDto toUserDto(UserEntity userEntity) {
        if ( userEntity == null ) {
            return null;
        }

        Long id = null;
        String email = null;
        String password = null;
        Long type = null;

        id = userEntity.getId();
        email = userEntity.getEmail();
        password = userEntity.getPassword();
        type = userEntity.getType();

        String firstname = null;
        String lastname = null;

        UserDto userDto = new UserDto( id, firstname, lastname, email, password, type );

        return userDto;
    }
}
