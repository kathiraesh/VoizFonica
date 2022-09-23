package com.voizfonica.voizfonica.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.voizfonica.voizfonica.Repository.LoginRepository;
import com.voizfonica.voizfonica.entity.Login;
@Service
public class LoginService {

	 @Autowired
	    private LoginRepository loginRepository;
	public Login fetchRegisterByEmailAndPassword(String tempemail, String tempPass) {
		// TODO Auto-generated method stub
		return loginRepository.findByEmailAndPassword(tempemail, tempPass);
	}

}
