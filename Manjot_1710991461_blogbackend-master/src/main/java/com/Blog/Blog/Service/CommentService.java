package com.Blog.Blog.Service;

import com.Blog.Blog.Model.Blogs;
import com.Blog.Blog.Model.Comments;
import com.Blog.Blog.Model.Users;
import com.Blog.Blog.Repository.BlogsRepository;
import com.Blog.Blog.Repository.CommentsRepository;
import com.Blog.Blog.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.Optional;

@Service
public class CommentService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    BlogsRepository blogsRepository;

    @Autowired
    CommentsRepository commentsRepository;


    public String postComment(Principal principal, Long blogId, String comment) {
        Users user = userRepository.findByEmail(principal.getName());
        Optional<Blogs> blogs = blogsRepository.findById(blogId);
        Comments comments = new Comments();
        comments.setUser(user);
        comments.setBlogs(blogs.get());
        comments.setComment(comment);
        commentsRepository.save(comments);
        return "\"Comment Added\"";
    }
}
