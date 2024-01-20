package com.tkukulka.ztpai.manager.service.serviceRequest;

import java.time.LocalDateTime;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-01-20T10:08:57+0100",
    comments = "version: 1.5.5.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.2.1.jar, environment: Java 19.0.2 (Amazon.com Inc.)"
)
class ServiceRequestMapperImpl extends ServiceRequestMapper {

    @Override
    ServiceRequestEntity toEntity(ServiceRequestCreateRequestDto createRequestDto) {
        if ( createRequestDto == null ) {
            return null;
        }

        ServiceRequestEntity serviceRequestEntity = new ServiceRequestEntity();

        serviceRequestEntity.setBikeName( createRequestDto.getBikeName() );
        serviceRequestEntity.setDescription( createRequestDto.getDescription() );
        serviceRequestEntity.setPrice( createRequestDto.getPrice() );
        serviceRequestEntity.setOwnerId( createRequestDto.getOwnerId() );

        return serviceRequestEntity;
    }

    @Override
    ServiceRequestDto toServiceRequestDto(ServiceRequestEntity serviceRequestEntity) {
        if ( serviceRequestEntity == null ) {
            return null;
        }

        Long id = null;
        String bikeName = null;
        String description = null;
        String price = null;
        Long ownerId = null;
        boolean isAccepted = false;
        LocalDateTime creationTime = null;

        id = serviceRequestEntity.getId();
        bikeName = serviceRequestEntity.getBikeName();
        description = serviceRequestEntity.getDescription();
        price = serviceRequestEntity.getPrice();
        ownerId = serviceRequestEntity.getOwnerId();
        if ( serviceRequestEntity.getIsAccepted() != null ) {
            isAccepted = serviceRequestEntity.getIsAccepted();
        }
        creationTime = serviceRequestEntity.getCreationTime();

        ServiceRequestDto serviceRequestDto = new ServiceRequestDto( id, bikeName, description, price, ownerId, isAccepted, creationTime );

        return serviceRequestDto;
    }
}
