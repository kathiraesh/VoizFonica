package com.voizfonica.voizfonica.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "paymentdetails")
public class Payment {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    String mobilenumber;
    String plan;
    String cardholder;
    String cardnumber;
    String expiry;
    int cvv;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getMobilenumber() {
		return mobilenumber;
	}
	public void setMobilenumber(String mobilenumber) {
		this.mobilenumber = mobilenumber;
	}
	public String getPlan() {
		return plan;
	}
	public void setPlan(String plan) {
		this.plan = plan;
	}
	public String getCardholder() {
		return cardholder;
	}
	public void setCardholder(String cardholder) {
		this.cardholder = cardholder;
	}
	public String getCardnumber() {
		return cardnumber;
	}
	public void setCardnumber(String cardnumber) {
		this.cardnumber = cardnumber;
	}
	public String getExpiry() {
		return expiry;
	}
	public void setExpiry(String expiry) {
		this.expiry = expiry;
	}
	public int getCvv() {
		return cvv;
	}
	public void setCvv(int cvv) {
		this.cvv = cvv;
	}
	public Payment(int id, String mobilenumber, String plan, String cardholder, String cardnumber, String expiry,
			int cvv) {
		super();
		this.id = id;
		this.mobilenumber = mobilenumber;
		this.plan = plan;
		this.cardholder = cardholder;
		this.cardnumber = cardnumber;
		this.expiry = expiry;
		this.cvv = cvv;
	}
	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Payment [id=" + id + ", mobilenumber=" + mobilenumber + ", plan=" + plan + ", cardholder=" + cardholder
				+ ", cardnumber=" + cardnumber + ", expiry=" + expiry + ", cvv=" + cvv + "]";
	}
    
    
}
