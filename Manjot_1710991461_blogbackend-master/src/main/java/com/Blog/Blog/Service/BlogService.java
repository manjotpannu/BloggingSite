package com.Blog.Blog.Service;

import com.Blog.Blog.Model.Blogs;
import com.Blog.Blog.Model.Users;
import com.Blog.Blog.Repository.BlogsRepository;
import com.Blog.Blog.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class BlogService {
    @Autowired
    BlogsRepository blogsRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    BlogService blogService;
    public Blogs editBlog(Long id, Blogs blogs, Principal principal) {
        String email = principal.getName();
        Users users = userRepository.findByEmail(email);
        blogs.setUsers(users);
        Blogs old = blogsRepository.findById(id).get();
        blogs.setId(old.getId());
        blogsRepository.saveAndFlush(blogs);
        return blogs;
    }

    public List<Blogs> delete(Long id,Blogs blogs, Principal principal) {
        String email = principal.getName();
        Users users = userRepository.findByEmail(email);
        blogs.setUsers(users);
        blogsRepository.deleteById(id);
        return blogsRepository.findAll();
    }
    public ArrayList<Blogs> show(Principal principal) {
        String email = principal.getName();
        Users users = userRepository.findByEmail(email);
        return blogsRepository.findAllByUsers(users);
    }
        public Blogs add(Blogs blogs, Principal principal) {
            String email = principal.getName();
            Users users = userRepository.findByEmail(email);
        blogs.setUsers(users);
        return blogsRepository.save(blogs);
        }

        public ArrayList<Blogs> getblog(Long id) {
        Optional<Users> current =userRepository.findByUsrid(id);
        return blogsRepository.findAllByUsers(current.get());
        }
}
