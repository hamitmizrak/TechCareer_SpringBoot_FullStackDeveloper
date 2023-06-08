package com.hamitmizrak.business.service.impl;

import com.hamitmizrak.bean.ModelMapperBean;
import com.hamitmizrak.business.dto.BlogDto;
import com.hamitmizrak.business.service.IBlogGenericsService;
import com.hamitmizrak.data.entity.BlogEntity;
import com.hamitmizrak.data.repository.IBlogRepository;
import com.hamitmizrak.exception.BadRequestException;
import com.hamitmizrak.exception.ResourceNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
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
        return modelMapperBean.modelMapperMethod().map(blogEntity, BlogDto.class);
    }

    @Override
    public BlogEntity DtoToEntity(BlogDto blogDto) {
        return modelMapperBean.modelMapperMethod().map(blogDto, BlogEntity.class);
    }

    // ### CRUD ###############################
    // CREATE
    @Transactional // Create, Delete, Update
    @Override
    public BlogDto blogServiceCreate(BlogDto blogDto) {
        if (blogDto != null) {
            BlogEntity blogEntityModel = DtoToEntity(blogDto);
            BlogEntity blogEntity = iBlogRepository.save(blogEntityModel);
            blogDto.setId(blogEntity.getId());
            blogDto.setSystemDate(blogDto.getSystemDate());
        } else if (blogDto == null)
            throw new BadRequestException("BlogDto yoktur");
        return blogDto;
    }

    // LIST
    @Override
    public List<BlogDto> blogServiceList() {
        Iterable<BlogEntity> blogEntityIterable = iBlogRepository.findAll();
        List<BlogDto> list = new ArrayList<>();
        for (BlogEntity entity : blogEntityIterable) {
            BlogDto blogDto = EntityToDto(entity);
            list.add(blogDto);
        }
        return list;
    }

    // FIND
    @Override
    public BlogDto blogServiceFindById(Long id) {
        BlogEntity blogEntity = null;
        if (id != null) {
            blogEntity = iBlogRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException(id + " nolu ID bulunamadı"));
        } else if (id == null)
            throw new BadRequestException(id + "Blog Dto Null Geldi"); // 400
        return EntityToDto(blogEntity);
    }

    // DELETE
    @Transactional // Create, Delete, Update
    @Override
    public BlogDto blogServiceDeleteById(Long id) {
        BlogDto blogDtoDeleteFind = blogServiceFindById(id);
        BlogEntity blogEntity = DtoToEntity(blogDtoDeleteFind);
        iBlogRepository.delete(blogEntity);
        return blogDtoDeleteFind;
    }

    // Update
    // CommandLineRunner

    // UPDATE
    @Transactional // Create, Delete, Update
    @Override
    public BlogDto blogServiceUpdateById(Long id, BlogDto blogDto) {
        BlogEntity blogEntity = DtoToEntity(blogServiceFindById(id));
        if (blogEntity != null) {
            blogEntity.setId(id);
            blogEntity.setHeader(blogDto.getHeader());
            blogEntity.setContent(blogDto.getContent());
            iBlogRepository.save(blogEntity);
            blogDto.setId(blogEntity.getId());
            blogDto.setSystemDate(blogDto.getSystemDate());
        }
        return EntityToDto(blogEntity);
    }

    // ### PAGEABLE ###################################################################
    // Lıst: pageable
    @Override
    public List<BlogDto> blogServiceAllList() {
        Iterable<BlogEntity> blogEntityPage = iBlogRepository.findAll();
        List<BlogDto> list = new ArrayList<>();
        for (BlogEntity entity : blogEntityPage) {
            BlogDto blogDto = EntityToDto(entity);
            list.add(blogDto);
        }
        return list;
    }

    @Override
    public Page<BlogEntity> blogServicePagination(int currentPage, int pageSize) {
        return null;
    }

    @Override
    public Page<BlogEntity> blogServicePagination(Pageable pageable, BlogDto blogDto) {
        return null;
    }

    // ### PROFILE ########################################################################
    // ÇOKLU VERİ EKLE
    @Override
    public List<BlogDto> speedDataService() {
        List<BlogDto> list = new ArrayList<>();
        for (int i = 1; i <= 10; i++) {
            BlogDto blogDto = BlogDto.builder()
                    .header("header " + i)
                    .content("content " + i)
                    .build();
            blogServiceCreate(blogDto);
            list.add(blogDto);
        }
        return list;
    }

    // ÇOKLU VERİ SİL
    @Override
    public String allDeleteService() {
        iBlogRepository.deleteAll();
        log.info("Silindi");
        return "Silindi ";
    }

    // APP INFO
    @Override
    public String appInformationService(HttpServletRequest request, HttpServletResponse response) {
        // URL URI
        // relative Path, absolute Path
        String URI = request.getRequestURI();
        String LOCALHOST = request.getLocalAddr();
        String SESSION = request.getSession().toString();
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(URI).append(" ").append(LOCALHOST).append(" ").append(SESSION);
        return stringBuilder.toString();
    }
} //end class
