const express = require("express");


//const PostController = require("../controllers/item");

const router = express.Router();

//router.post("", ItemController.createIncident);
router.post('', (req, res) => {
    debugger;
    console.log('HI POST');
console.log(req);
console.log(res);
    //const book = req.body;
//http://presnowka.westeurope.cloudapp.azure.com:16001/api/sn_sc/servicecatalog/items/1b53e3d249b30010c99245fe5483bcd2/submit_producer
    // Output the book to the console for debugging
    //console.log(book);
    //books.push(book);

    //res.send('Book is added to the database');
});
/*router.put("/:id", checkAuth, extractFile, PostController.editPost);

router.get("", PostController.getPosts);

router.get("/:id", PostController.getPost);

router.delete("/:id", checkAuth, PostController.deletePost);*/

module.exports = router;