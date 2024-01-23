package com.tkukulka.ztpai.manager.service.serviceRequest;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Getter
@RequiredArgsConstructor(access = AccessLevel.PACKAGE)
public class ServiceRequestCreateRequestDto {

    private final String bikeName;

    private final String description;

    private final String price;

//    private String fileName;

    private final Long ownerId;
}
