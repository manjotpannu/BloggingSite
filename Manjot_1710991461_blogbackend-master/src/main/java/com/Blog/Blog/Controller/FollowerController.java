package com.Blog.Blog.Controller;

import com.Blog.Blog.Model.Follower;
import com.Blog.Blog.Repository.FollowersRepository;
import com.Blog.Blog.Service.FollowersService;
import com.Blog.Blog.Service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;

    @RestController
    @RequestMapping("/follow")
    @CrossOrigin(origins = "http://localhost:4200")
    public class FollowerController {
        @Autowired
        FollowersService followersService;
        @Autowired
        FollowersRepository followersRepository;
        @Autowired
        UsersService usersService;
        @GetMapping("/followers")
        public ArrayList<Follower> getFollowers(Principal principal)
        {
            return followersService.getEmail(principal);
        }
        @GetMapping("/UserId/{id}")
        public String addNewFollower(@PathVariable("id") Long id, Principal principal)
        {
            return followersService.addFollower(principal,id);
        }
        @GetMapping("/delete/UserId/{id}")
        public String deleteFollower(@PathVariable("id")Long id,Principal principal)
        {
            return followersService.deleteFromFollowers(id, principal);
        }
    }

