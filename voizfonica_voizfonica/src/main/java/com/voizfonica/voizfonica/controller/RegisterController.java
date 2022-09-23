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

import com.voizfonica.voizfonica.Repository.RegisterRepository;
import com.voizfonica.voizfonica.entity.Register;
import com.voizfonica.voizfonica.service.RegisterService;


@CrossOrigin(origins="http://localhost:4200/")
@RestController
public class RegisterController {
	@Autowired
    RegisterRepository registerRepository;
	@Autowired
    RegisterService service;
    @RequestMapping("/homee") // REST API End Point
    public String home() {
       return "<Marquee><H1>Welcome to my page!</H1></Marquee>";
    }
   
    @GetMapping("/getreg")
    public List<Register> getreg() {
       return registerRepository.findAll();
    }

   // create POST
    // create employee rest API 

    @PostMapping("/addreg")
    public Register createregister(@RequestBody Register reg) throws Exception {
    	String tempemail=reg.getEmail();
        if(tempemail != null && !"".equals(tempemail)){
            Register regobj=service.fetchRegisterByEmail(tempemail);
            if(regobj !=null) {
                throw new Exception ("User with "+tempemail+"is already exist");
            }
        }
        Register regObj=null;
        regObj=service.saveReg(reg);
        return regObj;
           
    }
   
    
//    @PostMapping("/addRegister")
//    public Register createregister(@RequestBody Register register) {
//        try {
//            return registerRepository.save(register);
//        } catch (Exception e) {
//            throw e;
//        }
 
    @DeleteMapping("/deletereg/{id}")
    public String  deleteProduct(@PathVariable int id) {   
        registerRepository.deleteById(id);
        return  "Is deleted";
    }
    
}
