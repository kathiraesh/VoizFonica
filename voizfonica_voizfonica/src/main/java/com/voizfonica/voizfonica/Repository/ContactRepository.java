package com.voizfonica.voizfonica.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.voizfonica.voizfonica.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Integer>{

}
