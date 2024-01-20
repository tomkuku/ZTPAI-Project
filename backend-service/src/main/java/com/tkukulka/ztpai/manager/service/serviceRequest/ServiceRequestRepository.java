package com.tkukulka.ztpai.manager.service.serviceRequest;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

interface ServiceRequestRepository extends JpaRepository<ServiceRequestEntity, Long> {

    Optional<ServiceRequestEntity> findById(Long id);
}
