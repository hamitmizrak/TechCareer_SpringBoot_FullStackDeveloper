package com.hamitmizrak.bean;

import com.hamitmizrak.business.dto.BlogDto;
import com.hamitmizrak.business.service.impl.BlogServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

// LOMBOK
@RequiredArgsConstructor

@Configuration
public class CommandLineRunnerBean {

    private final BlogServiceImpl blogService;

    @Bean
    public CommandLineRunner commandLineRunnerMethod(){
        return args -> {
                List<BlogDto> list = new ArrayList<>();
                for (int i = 1; i <= 10; i++) {
                    BlogDto blogDto = BlogDto.builder()
                            .header("header " + UUID.randomUUID().toString())
                            .content("content " + UUID.randomUUID().toString())
                            .build();
                    blogService.blogServiceCreate(blogDto);
                    list.add(blogDto);
                }
        }; //end args
    } // end command Line Runner Method
} // end class
