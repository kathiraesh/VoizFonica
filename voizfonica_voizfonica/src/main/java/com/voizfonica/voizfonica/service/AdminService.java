package com.voizfonica.voizfonica.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.voizfonica.voizfonica.Repository.AdminRepository;
import com.voizfonica.voizfonica.entity.Admin;



@Service
public class AdminService {
	@Autowired
	private AdminRepository adm;
	
	public Admin savead(Admin admin) 
	{
		return adm.save(admin);
	}
	public Admin fetchAdminByEmail(String email) 
	{
		return adm.findByEmail(email);
	}
	public Admin fetchAdminByEmailAndPassword(String email,String password) 
	{
		return adm.findByEmailAndPassword(email, password);
	}


}

