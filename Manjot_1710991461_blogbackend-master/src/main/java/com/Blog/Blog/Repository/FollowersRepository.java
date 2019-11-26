package com.Blog.Blog.Repository;

import com.Blog.Blog.Model.Follower;
import com.Blog.Blog.Model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Optional;

@Repository
public interface FollowersRepository extends JpaRepository<Follower,Long> {
    ArrayList<Follower> findAllByUsers(Optional<Users> users);
    void deleteByUsers(Optional<Users> users1);
    void deleteByUsersAndUsers1(Optional<Users> users, Optional<Users> users1);
}

