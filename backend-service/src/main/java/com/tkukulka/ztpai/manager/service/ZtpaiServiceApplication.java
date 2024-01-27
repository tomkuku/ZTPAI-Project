package com.tkukulka.ztpai.manager.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@Import(CorsConfig.class)
@SpringBootApplication
public class ZtpaiServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ZtpaiServiceApplication.class, args);
    }

}
