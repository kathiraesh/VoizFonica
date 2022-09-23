package com.voizfonica.voizfonica.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.voizfonica.voizfonica.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
	public Admin findByEmail(String email);
	public Admin findByEmailAndPassword(String email,String password);

}
