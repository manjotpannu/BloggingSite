package com.Blog.Blog.Service;

import com.Blog.Blog.Model.Follower;
import com.Blog.Blog.Model.Users;
import com.Blog.Blog.Repository.FollowersRepository;
import com.Blog.Blog.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.security.Principal;
import java.util.ArrayList;
import java.util.Optional;

@Service
    public class FollowersService {
    @Autowired
    FollowersRepository followersRepository;
    @Autowired
    UserRepository userRepository;


    private ArrayList<Follower> getFollowersFromCurrentUser(Principal principal) {
        Optional<Users> users = userRepository.getByEmail(principal.getName());
        ArrayList<Follower> followers = followersRepository.findAllByUsers(users);
        return followers;
    }
    public ArrayList<Follower> getEmail(Principal principal) {
        String email = principal.getName();
        Optional<Users> users = userRepository.getByEmail(email);
        return followersRepository.findAllByUsers(users);
    }
    public String addFollower(Principal principal, Long id) {
        Optional<Users> users = userRepository.findByUsrid(id);
        Optional<Users> users1 = userRepository.getByEmail(principal.getName());
        System.out.println(users1);
        //ArrayList<Followers> followers = getFollowersFromCurrentUser(principal);
        Follower followers = new Follower();
        followers.setUsers1(users.get());
        followers.setUsers(users1.get());
        followersRepository.saveAndFlush(followers);
        return "\"Follower added\"";
    }
    @Transactional
    public String deleteFromFollowers(Long id,Principal principal)
    {
        Optional<Users> users1= userRepository.findByUsrid(id);
        Optional<Users> users = userRepository.getByEmail(principal.getName());
        followersRepository.deleteByUsersAndUsers1(users,users1);
        return "\"Follower deleted\"";
    }
    }

