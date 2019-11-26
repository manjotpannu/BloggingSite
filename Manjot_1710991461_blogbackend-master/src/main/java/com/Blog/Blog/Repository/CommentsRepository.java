package com.Blog.Blog.Repository;

import com.Blog.Blog.Model.Comments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

@Repository
public interface CommentsRepository extends JpaRepository<Comments,Long> {
}
