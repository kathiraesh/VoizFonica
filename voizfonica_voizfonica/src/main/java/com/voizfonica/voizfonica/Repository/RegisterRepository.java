package com.voizfonica.voizfonica.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.voizfonica.voizfonica.entity.Register;

public interface RegisterRepository extends JpaRepository<Register, Integer>{
	public Register findByEmail(String username);
    public Register findByEmailAndPassword(String username,String userpass);

}
