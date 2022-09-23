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

import com.voizfonica.voizfonica.Repository.PaymentRepository;
import com.voizfonica.voizfonica.entity.Payment;

@CrossOrigin
@RestController
public class PaymentController {
	@Autowired
	PaymentRepository payrepo;
	@RequestMapping("/payment") // REST API End Point
    public String payment() {
       return "<Marquee><H1>Welcome to payment page!</H1></Marquee>";
    }
    @GetMapping("/getpay")
    public List<Payment> getpayment() {
       return payrepo.findAll();
    }
    @PostMapping("/addpay")    
    public Payment createpay(@RequestBody Payment payment) {
        return payrepo.save(payment);
        
    }
    @DeleteMapping("/deletepay/{id}")
    public String  deletepay(@PathVariable int id)
    {
    	payrepo.deleteById(id);
        return  "Is deleted";
        
}
}
