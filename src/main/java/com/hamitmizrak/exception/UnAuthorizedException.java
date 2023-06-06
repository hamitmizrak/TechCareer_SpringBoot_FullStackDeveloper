package com.hamitmizrak.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// 401:  UNAUTHORIZED
@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class UnAuthorizedException extends RuntimeException{

    public UnAuthorizedException(String message) {
        super(message);
    }
}