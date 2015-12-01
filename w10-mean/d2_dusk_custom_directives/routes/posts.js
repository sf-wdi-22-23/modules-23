var express = require('express');
var postRouter = express.Router();

var Post = require('../models/post.js');

postRouter.route('/')  // translates to '/api/posts/'
  // send all posts
  .get(function(request, response){
      Post.find().sort('-created_at').exec(function(err, posts) {
      if (err) { return response.status(404).send(err); }
      response.send(posts); 
    });    
  })
  // create new post
  .post(function(req,res){  
   // var post = new Post({ content: req.body.content });
   // post.save(function (err, post) {
    Post.create({ content: req.body.content }, function(err, post){
      if (err) { return res.send(err); }
      console.log(post);
      res.status(201).send(post);
    });
  });

postRouter.route('/:post_id')   // translates to '/api/posts/:post_id'
  // send one post by id
  .get(function(req,res){   
    Post.findById(req.params.post_id, function(err, post) {
      if (err) { return res.status(404).send(err); }
      res.send(post); 
    });
  })

  // full update of one post by id
  .put(function(req,res){ 
    Post.findOneAndUpdate({ _id: req.params.post_id}, req.query.post, function (err, post) {
      if (err) { return res.send(err); }
      res.send(post);
    });
  })

  // delete one post by id
  .delete(function(req,res){   
    Post.findByIdAndRemove(req.params.post_id, function (err, post) {
      if (err) { return res.send(err); }
      res.status(200).send('Success');
    });
  });

module.exports = postRouter;