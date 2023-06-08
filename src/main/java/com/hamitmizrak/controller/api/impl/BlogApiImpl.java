package com.hamitmizrak.controller.api.impl;

import com.hamitmizrak.business.dto.BlogDto;
import com.hamitmizrak.business.service.IBlogGenericsService;
import com.hamitmizrak.controller.api.IBlogGenericsApi;
import com.hamitmizrak.error.ApiResult;
import com.hamitmizrak.util.FrontEndURL;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// LOMBOK
@RequiredArgsConstructor //Injection
@Log4j2

// API
@RestController
@CrossOrigin(origins = FrontEndURL.FRONTEND_URL) // CORS
@RequestMapping("/blog/api/v1")
public class BlogApiImpl implements IBlogGenericsApi<BlogDto> {

    // INJECTION
    private final IBlogGenericsService iBlogGenericsService;

    //ERROR
    private ApiResult apiResult;

    // ### ROOT ###############################
    // localhost:2222
    // localhost:2222/index
    @Override
    @GetMapping({"/", "/index"})
    public ResponseEntity<String> getRoot() {
        return ResponseEntity.ok("index");
    }

    // ### CRUD ###############################
    // CREATE
    // localhost:2222/blog/api/v1/create
    @Override
    @PostMapping("/create")
    public ResponseEntity<?> blogServiceCreate(@Valid @RequestBody BlogDto blogDto) {
        //return ResponseEntity.status(200).body(iBlogGenericsService.blogServiceCreate(blogDto));
        //return ResponseEntity.status(HttpStatus.OK).body(iBlogGenericsService.blogServiceCreate(blogDto));
        return ResponseEntity.ok(iBlogGenericsService.blogServiceCreate(blogDto));
    }

    // LIST
    // localhost:2222/blog/api/v1/list
    @Override
    @GetMapping(value = "/list")
    public ResponseEntity<List<BlogDto>> blogServiceList() {
        return ResponseEntity.ok(iBlogGenericsService.blogServiceAllList());
    }

    // FIND
    // localhost:2222/blog/api/v1/find
    // localhost:2222/blog/api/v1/find/0
    // localhost:2222/blog/api/v1/find/1
    @Override
    @GetMapping({"/find", "/find/{id}"})
    public ResponseEntity<?> blogServiceFindById(@PathVariable(name = "id", required = false) Long id) {
        if (id == null) {
            log.error("Blog Api Null Pointer Exception Geldi");
            throw new NullPointerException(id + " Blog Api Null Veri Geldi");
        }
        if (id == 0) {
            log.error("Blog Api 0 badrequest Geldi");
            //(int status, String error, String message, String path)
            apiResult = new ApiResult(400, "bad Request", " Kötü İstek", "/blog/api/v1/find/0");
            return ResponseEntity.ok(apiResult);
        }
        return ResponseEntity.ok(blogServiceFindById(id));
    }

    // DELETE
    // localhost:2222/blog/api/v1/delete/1
    @Override
    @DeleteMapping({"/delete", "/delete/{id}"})
    public ResponseEntity<?> blogServiceDeleteById(@PathVariable(name = "id", required = false) Long id) {
        return ResponseEntity.ok(iBlogGenericsService.blogServiceDeleteById(id));
    }

    // UPDATE
    // localhost:2222/blog/api/v1/update/1
    @Override
    @PutMapping({"/update", "/update/{id}"})
    public ResponseEntity<?> blogServiceUpdateById(
            @PathVariable(name = "id", required = false) Long id,
            @Valid @RequestBody BlogDto blogDto) {
        return ResponseEntity.ok(iBlogGenericsService.blogServiceUpdateById(id,blogDto));
    }

    ///////////////
    // SPEED, DELETEALL
    // localhost:2222/blog/api/v1/speed/data
    @GetMapping("/speed/data")
    @Override
    public ResponseEntity<List<BlogDto>> speedDataService() {
        return ResponseEntity.ok(iBlogGenericsService.speedDataService());
    }

    // localhost:2222/blog/api/v1/all/delete
    @GetMapping("/all/delete")
    @Override
    public ResponseEntity<String> allDeleteService() {
        return ResponseEntity.ok(iBlogGenericsService.allDeleteService());
    }

    // localhost:2222/blog/api/v1/app/information
    @GetMapping("/app/information")
    @Override
    public ResponseEntity<String> appInformationService(HttpServletRequest request, HttpServletResponse response) {
        return ResponseEntity.ok(iBlogGenericsService.appInformationService(request,response));
    }

    /////////////////
    // PAGE, PAGEABLE
    @Override
    public ResponseEntity<List<BlogDto>> blogServiceAllList() {
        return null;
    }

    @Override
    public ResponseEntity<Page<BlogDto>> blogServicePagination(int currentPage, int pageSize) {
        return null;
    }

    @Override
    public ResponseEntity<Page<BlogDto>> blogServicePagination(Pageable pageable, BlogDto blogDto) {
        return null;
    }

    @Override
    public ResponseEntity<Page<BlogDto>> blogServicePagination(Pageable pageable, Object d) {
        return null;
    }
}
