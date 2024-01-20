package com.tkukulka.ztpai.manager.service.serviceRequest;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@Getter
@RequiredArgsConstructor(access = AccessLevel.PACKAGE)
public class ServiceRequestDto {

    private final Long id;

    private final String bikeName;

    private final String description;

    private final String price;

    private final Long ownerId;

    private final boolean isAccepted;

    private final LocalDateTime creationTime;

    static ServiceRequestDto from(ServiceRequestEntity entity) {
        return ServiceRequestMapper.INSTANCE.toServiceRequestDto(entity);
    }
}
