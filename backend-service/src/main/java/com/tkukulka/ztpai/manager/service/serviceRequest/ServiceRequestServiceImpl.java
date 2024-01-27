package com.tkukulka.ztpai.manager.service.serviceRequest;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;
import java.util.List;

@Service
@RequiredArgsConstructor(access = AccessLevel.PACKAGE)
public class ServiceRequestServiceImpl {
    private final ServiceRequestRepository serviceRequestRepository;

    ServiceRequestDto createServiceRequest(ServiceRequestCreateRequestDto serviceRequestDto) {
        var serviceRequestEntity = ServiceRequestEntity.from(serviceRequestDto);
        var savedServiceRequestEntity = serviceRequestRepository.save(serviceRequestEntity);
        return ServiceRequestDto.from(savedServiceRequestEntity);
    }

    ServiceRequestDto getServiceRequestById(Long id) {
        ServiceRequestEntity serviceRequestEntity = findEntityByIdOrThrowException(id);
        return ServiceRequestDto.from(serviceRequestEntity);
    }

    private ServiceRequestEntity findEntityByIdOrThrowException(Long id) {
        return serviceRequestRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("ServiceRequest with id=%s not found".formatted(id)));
    }

    List<ServiceRequestDto> getAllServiceRequests() {
        List<ServiceRequestEntity> allServiceRequests = serviceRequestRepository.findAll();
        return ServiceRequestDto.fromList(allServiceRequests);
    }
}
