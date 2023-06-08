package com.hamitmizrak.controller.api;

import com.hamitmizrak.business.dto.BlogDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import java.util.List;

public interface IBlogGenericsApi<D> extends IPageableAndProfileApp {

    // Spring MVC (Thymeleaf)
    public ResponseEntity<String>  getRoot();

    // ### CRUD ###############################
    // CREATE
    public ResponseEntity<?>  blogServiceCreate(D d);

    // LIST
    public ResponseEntity<List<D>>  blogServiceList();

    // FIND
    public ResponseEntity<?>  blogServiceFindById(Long id);

    // DELETE
    public  ResponseEntity<?> blogServiceDeleteById(Long id);

    // UPDATE
    public ResponseEntity<?>  blogServiceUpdateById(Long id, D d);

    ResponseEntity<Page<BlogDto>> blogServicePagination(Pageable pageable, Object d);
}
