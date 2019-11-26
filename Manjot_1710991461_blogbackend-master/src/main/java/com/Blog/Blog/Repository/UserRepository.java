package com.Blog.Blog.Repository;

import com.Blog.Blog.Model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
    Users findByEmail(String name);
    Optional<Users> findByUsrid(Long id);

    Optional<Users> getByEmail(String name);
}
