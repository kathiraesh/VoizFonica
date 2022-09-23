package com.voizfonica.voizfonica.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.voizfonica.voizfonica.Repository.RegisterRepository;
import com.voizfonica.voizfonica.entity.Register;

@Service
public class RegisterService {
    @Autowired
    private RegisterRepository registerRepository;
    
    public Register saveReg(Register reg)
    {
        return registerRepository.save(reg);
    }
    public Register fetchRegisterByEmail(String username)
    {
        return registerRepository.findByEmail(username);
    }
    public Register fetchRegisterByEmailAndPassword(String username,String userpass)
    {
        return registerRepository.findByEmailAndPassword(username, userpass);
    }
    
}