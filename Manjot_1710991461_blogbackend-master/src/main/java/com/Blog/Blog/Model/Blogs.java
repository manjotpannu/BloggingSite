package com.Blog.Blog.Model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Blogs implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String about;
    private String content;
    private String category;
    @OneToOne
    private Users users;
    private String accesss;
    public Blogs(){
    }

    public String getAccesss() {
        return accesss;
    }

    public void setAccesss(String accesss) {
        this.accesss = accesss;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
