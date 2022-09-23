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

import com.voizfonica.voizfonica.Repository.ContactRepository;
import com.voizfonica.voizfonica.entity.Contact;
//import com.demoproject.demoproject.entity.Register;


@CrossOrigin
@RestController
public class ContactController {
           @Autowired
           ContactRepository conrep;
           @RequestMapping("/contact") // REST API End Point
    public String contact() {
       return "<Marquee><H1>Welcome to contact page!</H1></Marquee>";
    }
    @GetMapping("/getcon")
    public List<Contact> getcontact() {
       return conrep.findAll();
    }
    @PostMapping("/addcon")    
    public Contact createuser(@RequestBody Contact con) {
        return conrep.save(con);
        
    }
    @DeleteMapping("/deletecon/{id}")
    public String  deletecon(@PathVariable int id)
    {
       
        conrep.deleteById(id);
        return  "Is deleted";
    }

}
