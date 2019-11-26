package com.Blog.Blog.Controller;

import com.Blog.Blog.Model.Blogs;
import com.Blog.Blog.Repository.BlogsRepository;
import com.Blog.Blog.Service.BlogService;
import com.Blog.Blog.Service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class BlogController {
    @Autowired
    BlogsRepository blogsRepository;
    @Autowired
    BlogService blogService;
    @Autowired
    UsersService usersService;
    @PostMapping("/new")
    public Blogs Post(@RequestBody Blogs blogs){
        return blogsRepository.save(blogs);
    }
    @GetMapping("/getblog")
    public List<Blogs> get(){
        return blogsRepository.findAll();
    }
    @PutMapping("/update")
    public Blogs Update(@RequestBody Blogs blogs, @RequestParam("id") Long id, Principal principal){
        return blogService.editBlog(id, blogs, principal);
    }
    @DeleteMapping("/delete")
    public List<Blogs> remove(@RequestBody Blogs blogs, @RequestParam("id") Long id, Principal principal) {
        return blogService.delete(id,blogs, principal);
    }
    @GetMapping("/get/{id}")
    public Blogs get(@PathVariable(value = "id")Long id) {
        Blogs op = blogsRepository.findById(id).get();
        return op;
    }
    @GetMapping("/cat/{cat}")
    public List<Blogs> getDetailsByCat(@PathVariable(value="cat")String category)
    {
        return blogsRepository.findByCategory(category);
    }
    @GetMapping("/getuserbyid")
    public ArrayList<Blogs> get(Principal principal) {
        return blogService.show(principal);
    }

    @PostMapping("/addbyuser")
    public Blogs add(Principal principal,@RequestBody Blogs blogs){
       return blogService.add(blogs, principal);
    }
    @GetMapping("/myblogs/{id}")
    public ArrayList<Blogs> getMyBlogs (@PathVariable(value = "id")Long id) {
        return blogService.getblog(id);
    }
    @GetMapping("/myblogs")
    public ArrayList<Blogs> getMyBlogs (Principal principal) {
        return blogService.getblog(usersService.getUserId(principal));
    }
}
