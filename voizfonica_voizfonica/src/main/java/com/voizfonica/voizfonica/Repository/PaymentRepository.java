package com.voizfonica.voizfonica.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.voizfonica.voizfonica.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {

}
