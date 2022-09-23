package com.voizfonica.voizfonica.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.voizfonica.voizfonica.Repository.LoginRepository;
import com.voizfonica.voizfonica.entity.Login;
import com.voizfonica.voizfonica.service.LoginService;


@CrossOrigin
@RestController
public class LoginController {
	@Autowired
    LoginRepository loginRepository;
	@Autowired
    LoginService service;
    @RequestMapping("/homepage") // REST API End Point
    public String home() {
       return "<Marquee><H1>Welcome to my page!</H1></Marquee>";
    }
   
    @GetMapping("/getlog")
    public List<Login> getlog() {
       return loginRepository.findAll();
    }

   // create POST
    // create employee rest API 
    @PostMapping("/addlog")
    public Login createlogin(@RequestBody Login log) {
    	return loginRepository.save(log);
        
    }
    
//    @PostMapping("/addRegister")
//    public Register createregister(@RequestBody Register register) {
//        try {
//            return registerRepository.save(register);
//        } catch (Exception e) {
//            throw e;
//        }
    @PostMapping("/login")
    public Login login(@RequestBody Login log) throws Exception {
        String tempemail=log.getEmail();
        String tempPass=log.getPassword();
        Login logObj=null;
        if(tempemail != null && tempPass != null) {
           logObj=service.fetchRegisterByEmailAndPassword(tempemail, tempPass);
        }
        if (logObj == null)
        {
            throw new Exception("Wrong credentials");
        }
        return logObj;
        
    }
    
    @DeleteMapping("/deletelog/{id}")
    public String  deleteProduct(@PathVariable int id) {   
        loginRepository.deleteById(id);
        return  "Is deleted";
    }
    
}
