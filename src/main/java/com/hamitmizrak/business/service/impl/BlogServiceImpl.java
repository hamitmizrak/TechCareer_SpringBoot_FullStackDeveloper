package com.hamitmizrak.business.service.impl;

// LOMBOK


import com.hamitmizrak.bean.ModelMapperBean;
import com.hamitmizrak.business.dto.BlogDto;
import com.hamitmizrak.business.service.IBlogGenericsService;
import com.hamitmizrak.data.entity.BlogEntity;
import com.hamitmizrak.data.repository.IBlogRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

// LOMBOK
@RequiredArgsConstructor // Injection
@Log4j2

// SERVICE
@Service // Asıl iş Yükünü yapan yer
public class BlogServiceImpl implements IBlogGenericsService<BlogDto, BlogEntity> {

    // INJECTION
   /* INJECTION 1.YOL
   @Autowired // Field Injection
    private ModelMapperBean modelMapperBean;
    */

    /*INJECTION 2.YOL
    private ModelMapperBean modelMapperBean;
    @Autowired // Constructor Injection
    public BlogServiceImpl(ModelMapperBean modelMapperBean) {
        this.modelMapperBean = modelMapperBean;
    }*/

    // final: 1-)field: sabit 2-)Metoda: Override edemezsin 3-) Class extends yapamazsın.
    // final: field verdiğinizde zorunlu olarak biz constructor oluşturulmasını istiyoruz.
    private final ModelMapperBean modelMapperBean;
    private final IBlogRepository iBlogRepository;


    // ### Model Mapper ###############################
    @Override
    public BlogDto EntityToDto(BlogEntity blogEntity) {
        return null;
    }

    @Override
    public BlogEntity DtoToEntity(BlogDto blogDto) {
        return null;
    }

    // ### CRUD ###############################
    // CREATE
    @Transactional // Create, Delete, Update
    @Override
    public BlogDto blogServiceCreate(BlogDto blogDto) {
        return null;
    }

    // LIST
    @Override
    public List<BlogDto> blogServiceList() {
        return null;
    }

    // FIND
    @Override
    public BlogDto blogServiceFindById(Long id) {
        return null;
    }

    // DELETE
    @Transactional // Create, Delete, Update
    @Override
    public BlogDto blogServiceDeleteById(Long id) {
        return null;
    }

    // UPDATE
    @Transactional // Create, Delete, Update
    @Override
    public BlogDto blogServiceUpdateById(Long id, BlogDto blogDto) {
        return null;
    }

    // ### PAGEABLE ###############################
    // Lıst: pageable
    @Override
    public List<BlogDto> blogServiceAllList() {
        return null;
    }

    @Override
    public Page<BlogEntity> blogServicePagination(int currentPage, int pageSize) {
        return null;
    }

    @Override
    public Page<BlogEntity> blogServicePagination(Pageable pageable, BlogDto blogDto) {
        return null;
    }

    // ### PROFILE ###############################
    // ÇOKLU VERİ EKLE
    @Override
    public String speedDataService() {
        return null;
    }

    // ÇOKLU VERİ EKLE
    @Override
    public String allDeleteService() {
        return null;
    }

    // APP INFO
    @Override
    public String appInformationService(HttpServletRequest request, HttpServletResponse response) {
        return null;
    }
}
