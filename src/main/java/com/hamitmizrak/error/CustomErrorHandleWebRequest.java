package com.hamitmizrak.error;

import com.hamitmizrak.util.FrontEndURL;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//LOMBOK
@Log4j2
@RequiredArgsConstructor

// SpringBoot defaulltan gelen error'ı kendimize göre customize yapıyoruz.
@RestController
@CrossOrigin(origins = FrontEndURL.FRONTEND_URL)// @CrossOrigin(origins = "http://localhost:3000")
public class CustomErrorHandleWebRequest implements ErrorController {

    // INJECTION
    private final ErrorAttributes errorAttributes;

    // 1.YOL
    // http://localhost:2222/error
    // Spring'ten gelen /error yakalayıp custom handle yapmak için
    @RequestMapping("/error")
    public ApiResult handleError(WebRequest webRequest) {
        //ApiResult değişkenlerini atamak
        int status;
        String message, path;
        ApiResult apiResult;

        //Spring 2.3>= sonra böyle oldu
        Map<String, Object> attributes = this.errorAttributes.getErrorAttributes(
                webRequest, ErrorAttributeOptions.of(ErrorAttributeOptions.Include.MESSAGE, ErrorAttributeOptions.Include.BINDING_ERRORS)
        ); //end attributes

        status = (Integer) attributes.get("status");
        message = (String) attributes.get("message");
        path = (String) attributes.get("path");
        apiResult = new ApiResult(status, path, message);

        //attibutesta apiResult varsa
        if (attributes.containsKey("errors")) {
            List<FieldError> fieldErrorList = (List) attributes.get("errors");
            Map<String, String> validationMistake = new HashMap<>();
            for (FieldError fieldError : fieldErrorList) {
                validationMistake.put(fieldError.getField(), fieldError.getDefaultMessage());
            }
            apiResult.setValidationErrors(validationMistake);
        }
        return apiResult;
    } //end 1.YOL handleError

}

