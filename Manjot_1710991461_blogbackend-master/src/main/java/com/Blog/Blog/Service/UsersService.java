package com.Blog.Blog.Service;

import com.Blog.Blog.Model.Users;
import com.Blog.Blog.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
public class UsersService {
    @Autowired
    UserRepository userRepository;
    public Users get(Principal principal){
        Users op =userRepository.findByEmail(principal.getName());
        return op;
    }
    public Long getUserId(Principal principal) {
        String email = principal.getName();
        return userRepository.findByEmail(email).getUsrid();
    }

}
