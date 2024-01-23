package com.tkukulka.ztpai.manager.service.serviceRequest;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "\"service_request\"")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ServiceRequestEntity {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "bikeName")
    private String bikeName;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private String price;

//    @Column(name = "fileName")
//    private String fileName;

    @Column(name = "ownerId")
    private Long ownerId;

    @Column(name = "isAccepted")
    private Boolean isAccepted = false;

    @Column(name = "creationTime")
    @CreationTimestamp
    private LocalDateTime creationTime;

    @PrePersist
    public void prePersist() {
        this.isAccepted = false;
    }

    static ServiceRequestEntity from(ServiceRequestCreateRequestDto serviceRequestDto) {
        return ServiceRequestMapper.INSTANCE.toEntity(serviceRequestDto);
    }
}