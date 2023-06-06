package com.hamitmizrak.error;

import com.hamitmizrak.util.FrontEndURL;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

// LOMBOK
@RequiredArgsConstructor // for injection

// API
@RestController
@CrossOrigin(origins = FrontEndURL.FRONTEND_URL)
public class CustomErrorHandleWebRequest {

    // INJECTION
    private final ErrorAttributes errorAttributes;

    // Spring gelen hataları ben alıyorum
    // http://localhost:2222/error
    @RequestMapping("/error")
    public ApiResult handleError(WebRequest webRequest){
         int status;
         String message;
         String path;
         ApiResult apiResult;

         // Spring +2.3>
        Map<String,Object> attributes=errorAttributes.getErrorAttributes(
                webRequest, ErrorAttributeOptions.of(ErrorAttributeOptions.Include.MESSAGE,ErrorAttributeOptions.Include.BINDING_ERRORS)
        );

        status= (int) attributes.get("status");
        message= (String) attributes.get("message");
        path= (String) attributes.get("path");
        // int status, String message, String path
        apiResult=new ApiResult(status,message,path);

        //  attributes error(Hata) varsa
        if(attributes.containsKey("errors")){
            List<FieldError> fieldErrorList= (List<FieldError>) attributes.get("error");
            Map<String,String> validation=new HashMap<>();
            for ( FieldError fieldError: fieldErrorList){
                validation.put(fieldError.getField(),fieldError.getDefaultMessage());
            }
            apiResult.setValidationErrors(validation);
        }

        return apiResult;
    } //end handleError
} // end CustomErrorHandleWebRequest {

