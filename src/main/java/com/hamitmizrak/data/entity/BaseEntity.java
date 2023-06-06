package com.hamitmizrak.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hamitmizrak.audit.AuditingAwareBaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.Date;
// LOMBOK
@Getter
@Setter
@NoArgsConstructor

// JSON
@JsonIgnoreProperties(value = {"created_date,updated_date"},allowGetters = true) // Json'a emir veriyoruz bunları takip etme
@EntityListeners(AuditingEntityListener.class) // AUDITING
@MappedSuperclass
public class BaseEntity extends AuditingAwareBaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date systemDate;
}
