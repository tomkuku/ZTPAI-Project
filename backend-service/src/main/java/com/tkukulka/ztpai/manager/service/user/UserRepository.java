package com.tkukulka.ztpai.manager.service.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

interface UserRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findById(Long id);

    List<UserEntity> findAll();

    Optional<UserEntity> findByEmail(String email);
}
