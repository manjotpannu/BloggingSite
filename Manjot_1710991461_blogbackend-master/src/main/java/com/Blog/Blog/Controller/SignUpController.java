package com.Blog.Blog.Controller;

import com.Blog.Blog.Model.Users;
import com.Blog.Blog.Repository.UserRepository;
import com.Blog.Blog.Service.UsersService;
import com.sun.net.httpserver.Authenticator;
import org.hibernate.validator.constraints.br.CNPJ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class SignUpController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    UsersService usersService;
    @PostMapping("/signup")
    public String Sign(@RequestBody Users users){
    users.setActive(1);
    userRepository.save(users);
    return "\"Success\"";
    }
    @GetMapping("/getuser")
    public List<Users> getUsers() {
        return userRepository.findAll();
    }
    @GetMapping("/logout")
    public String logout(HttpServletRequest req, HttpServletResponse ros) {
        Authentication authentication= SecurityContextHolder.getContext().getAuthentication();
        System.out.println("LogOut Servlet :"+authentication);

        if(authentication!=null){
            new SecurityContextLogoutHandler().logout(req,ros,authentication);
            req.getSession().invalidate();
        }
        return "\"logout successful\"";
    }
    @GetMapping("/get")
    public Users getData(Principal principal) {
        return usersService.get(principal);
    }
    @PutMapping("/update")
    public String Signg(@RequestBody Users users){
        users.setActive(1);
        users.setAuthentication("basic");
        userRepository.save(users);
        return "\"Success\"";
    }
}
