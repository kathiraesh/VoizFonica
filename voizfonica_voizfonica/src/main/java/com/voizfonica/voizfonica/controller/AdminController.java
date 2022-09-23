package com.voizfonica.voizfonica.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.voizfonica.voizfonica.Repository.AdminRepository;
import com.voizfonica.voizfonica.entity.Admin;
import com.voizfonica.voizfonica.service.AdminService;

@CrossOrigin
@RestController
public class AdminController {
	@Autowired
	AdminRepository adm;
	@Autowired
	AdminService ser;
	
	@GetMapping("/getad")
    public List<Admin> getallreg() {
       return adm.findAll();
    }
	@PostMapping("/addadmin")
    public Admin getallad(@RequestBody Admin admin) throws Exception {
    	String tempemail=admin.getEmail();
    	if(tempemail != null && !"".equals(tempemail)){
    		Admin adobj=ser.fetchAdminByEmail(tempemail);
    		if(adobj !=null) {
    			throw new Exception ("User with "+tempemail+"is already exist");
    		}
    	}
    	Admin adObj=null;
    	adObj=ser.savead(admin);
    	return adObj;
    }
	 @PostMapping("/adminlogin")
	    public Admin loginAdmin(@RequestBody Admin admin) throws Exception {
	    	String tempemail=admin.getEmail();
	    	String tempPass=admin.getPassword();
	    	
	    	Admin adObj=null;
	    	if(tempemail != null && tempPass != null) {
	    		adObj=ser.fetchAdminByEmailAndPassword(tempemail, tempPass);
	    	}
	    	if (adObj == null)
	    	{
	    		throw new Exception("Wrong credentials");
	    	}
	    	
	    	return adObj;
	        
	    }

}

