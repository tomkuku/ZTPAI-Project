package com.tkukulka.ztpai.manager.service.serviceRequest;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
abstract class ServiceRequestMapper {

    static final com.tkukulka.ztpai.manager.service.serviceRequest.ServiceRequestMapper INSTANCE = Mappers.getMapper(com.tkukulka.ztpai.manager.service.serviceRequest.ServiceRequestMapper.class);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "isAccepted", ignore = true)
    @Mapping(target = "creationTime", ignore = true)
    abstract ServiceRequestEntity toEntity(ServiceRequestCreateRequestDto createRequestDto);

    abstract ServiceRequestDto toServiceRequestDto(ServiceRequestEntity serviceRequestEntity);
}