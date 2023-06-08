package com.hamitmizrak.controller.api;

import com.hamitmizrak.business.dto.BlogDto;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import java.util.List;

public interface IPageableAndProfileApp {

    // Bütün veri eklesin
    public ResponseEntity<List<BlogDto> > speedDataService();

    // Bütün veriyi silsin
    public ResponseEntity<String>  allDeleteService();

    // App Information
    public ResponseEntity<String>  appInformationService(HttpServletRequest request, HttpServletResponse response);

    // ### PAGEABLE ###############################
    // Lıst: pageable
    public ResponseEntity<List<BlogDto>> blogServiceAllList();

    // Lıst: Page page,size
    public ResponseEntity<Page<BlogDto>>  blogServicePagination(int currentPage, int pageSize);

    // Lıst: page, pageable
    public ResponseEntity<Page<BlogDto>>  blogServicePagination(Pageable pageable,BlogDto blogDto);
}
