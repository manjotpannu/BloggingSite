package com.Blog.Blog.Repository;

import com.Blog.Blog.Model.Blogs;
import com.Blog.Blog.Model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface BlogsRepository extends JpaRepository<Blogs , Long> {

    List<Blogs> findByCategory(String category);
    ArrayList<Blogs> findAllByUsers(Users users);

}
