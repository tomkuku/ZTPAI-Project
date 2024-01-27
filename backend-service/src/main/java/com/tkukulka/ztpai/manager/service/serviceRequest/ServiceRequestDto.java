package com.tkukulka.ztpai.manager.service.serviceRequest;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

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

    static List<ServiceRequestDto> fromList(List<ServiceRequestEntity> entities) {
        return entities.stream()
                .map(ServiceRequestDto::from)
                .collect(Collectors.toList());
    }
}
