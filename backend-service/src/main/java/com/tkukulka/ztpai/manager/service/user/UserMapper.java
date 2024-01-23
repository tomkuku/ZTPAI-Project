package com.tkukulka.ztpai.manager.service.user;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
abstract class UserMapper {

    static final UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    @Mapping(target = "id", ignore = true)
    abstract UserEntity toEntity(UserCreateRequestDto createRequestDto);

    abstract UserDto toUserDto(UserEntity userEntity);
}
