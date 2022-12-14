package com.voizfonica.voizfonica.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "contactdetails")
public class Contact {
           @Id
           @GeneratedValue(strategy = GenerationType.AUTO)
           int id;
           String name;
           String email;
           String message;
           public String getMessage() {
                      return message;
           }
           public void setMessage(String message) {
                      this.message = message;
           }
           public int getId() {
                      return id;
           }
           public void setId(int id) {
                      this.id = id;
           }
           public String getName() {
                      return name;
           }
           public void setName(String name) {
                      this.name = name;
           }
           public String getEmail() {
                      return email;
           }
           public void setEmail(String email) {
                      this.email = email;
           }
           
           public Contact() {
                      super();
           }
           @Override
           public String toString() {
                      return "Contact [id=" + id + ", name=" + name + ", email=" + email + ", message=" + message + "]";
           }
           

}
