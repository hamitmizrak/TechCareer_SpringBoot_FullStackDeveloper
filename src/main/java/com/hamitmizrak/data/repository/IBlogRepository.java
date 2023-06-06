package com.hamitmizrak.data.repository;

import com.hamitmizrak.data.entity.BlogEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IBlogRepository extends CrudRepository<BlogEntity, Long> {
    // Delivered Query
    BlogEntity findByHeader(String header);

    // Query
    @Query("select b from BlogEntity b")
    List<BlogEntity> myBlogList();

    // Native

    // JPQL
}
