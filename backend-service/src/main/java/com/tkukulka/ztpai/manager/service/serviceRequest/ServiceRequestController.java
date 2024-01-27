package com.tkukulka.ztpai.manager.service.serviceRequest;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("v1/servicerequest")
@RequiredArgsConstructor
public class ServiceRequestController {

    private final ServiceRequestServiceImpl serviceRequestService;

    @PostMapping(path = "/create", consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(description = "Creates new service request.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "New service request created successfully.")
    })
    ServiceRequestDto createServiceRequest(@RequestBody ServiceRequestCreateRequestDto serviceRequestDto) {
        return serviceRequestService.createServiceRequest(serviceRequestDto);
    }

    @GetMapping(path = "/get/{id}")
    @Operation(description = "Get service request by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "New service request fetched successfully.",
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = ServiceRequestDto.class)))
    })
    ServiceRequestDto getServiceRequestById(@PathVariable Long id) {
        return serviceRequestService.getServiceRequestById(id);
    }

    @GetMapping(path = "/getall")
    @Operation(description = "Get all service requests")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "All service requests fetched successfully.",
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = List.class)))
    })
    List<ServiceRequestDto> getAllServiceRequests() {
        return serviceRequestService.getAllServiceRequests();
    }
}
