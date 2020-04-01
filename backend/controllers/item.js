//const Post = require("../models/post");

exports.createIncident =  (req, res, next) => {
    const url = 'http://presnowka.westeurope.cloudapp.azure.com:16001/api/sn_sc/servicecatalog/items/1b53e3d249b30010c99245fe5483bcd2/submit_producer';
    /*const post = new Post({
      title: req.body.title,
      content: req.body.content,
      imagePath: url + "/images/" + req.file.filename,
      creator: req.userData.userId
    });*/
    post.save().then(createdPost => {
      res.status(201).json({
        message: "Post added successfully",
        post: {
          ...createdPost,// Js feture copy all object property
          id: createdPost._id,
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating a post failed" 
      });
    });
  }
  var request = require('request');

  request.post(
      'http://presnowka.westeurope.cloudapp.azure.com:16001/api/sn_sc/servicecatalog/items/1b53e3d249b30010c99245fe5483bcd2/submit_producer',
      { "variables":{"caller_id":"a8f98bb0eb32010045e1a5115206fe3a","subcategory":"test","u_environment":"221f79b7c6112284005d646b76ab978c","u_equipment_type":"fc58735249f30010c99245fe5483bcb1","u_equipment_name":"c5efafda49b30010c99245fe5483bcf4","short_description":"Test"} },
      function (error, response, body) {
          debugger;
          if (!error && response.statusCode == 200) {
              console.log(body);
          }
      }
  );