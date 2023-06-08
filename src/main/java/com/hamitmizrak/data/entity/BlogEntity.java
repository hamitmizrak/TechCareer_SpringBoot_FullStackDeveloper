package com.hamitmizrak.data.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

// LOMBOK
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

@Entity
@Table(name="blog")
public class BlogEntity extends BaseEntity  implements Serializable {
    public static final Long serialVersionUID = 1L;

    @Column(name = "header",columnDefinition = "varchar(255) default 'header girmediniz'")
    private String header;

    @Column(name = "content",columnDefinition = "varchar(255) default 'content girmediniz'")
    private String content;
}
