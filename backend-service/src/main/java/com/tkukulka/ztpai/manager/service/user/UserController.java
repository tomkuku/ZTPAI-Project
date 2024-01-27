package com.tkukulka.ztpai.manager.service.user;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.webjars.NotFoundException;
import java.util.List;

@CrossOrigin(origins = "localhost:3000/signup")
@RestController()
@RequestMapping("v1/user")
@RequiredArgsConstructor
class UserController {

    private final UserServiceImpl userService;

    @PostMapping(path = "/create", consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(description = "Creates new service user.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "New user created successfully.")
    })
    UserDto createUser(@RequestBody UserCreateRequestDto userDto) {
        return userService.createUser(userDto);
    }

    @GetMapping(path = "/get/{id}")
    @Operation(description = "Get user by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "New user fetched successfully.",
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = UserDto.class)))
    })
    UserDto getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @GetMapping(path = "/getall")
    @Operation(description = "Get all users")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "All users fetched successfully.",
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = List.class)))
    })
    List<UserDto> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(path = "/getByEmail")
    @Operation(description = "Get user by email")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "User fetched successfully.",
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = UserDto.class))),
            @ApiResponse(responseCode = "404", description = "User not found.")
    })
    UserDto getUserByEmail(@RequestParam String email, HttpServletResponse response) {
        try {
            return userService.getUserByEmail(email);
        } catch (NotFoundException e) {
            response.setStatus(HttpStatus.NOT_FOUND.value());
            return null; // lub zwróć odpowiedź w inny sposób, zależnie od wymagań
        }
    }
}
