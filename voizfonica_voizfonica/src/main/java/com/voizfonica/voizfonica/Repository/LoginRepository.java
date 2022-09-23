package com.voizfonica.voizfonica.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.voizfonica.voizfonica.entity.Login;

public interface LoginRepository extends JpaRepository<Login, Integer>{

	Login findByEmailAndPassword(String tempemail, Object temppass);



}