const Post = require("../models/Post")
const ejs=require("ejs");

class postController{
    async getpost(req,res) {
       try {
        const posts =  await Post.find({});
        // res.json({success:true,posts})
        // console.log(posts)
        res.render('index',{posts:posts})
       } catch (error) {
           console.log("Error model : " + error)
           res.status(500).json({success:fail,message:"Lỗi server"})
       }
    }
    async createPost(req,res){
        try {
            const {title,description,imgUrl}=req.body;
            const newPost= new Post({
                title,
                description,
                imgUrl
            })
            await newPost.save()
            res.json({success:true,post:newPost})
        } catch (error) {
            console.log("Error model : " + error)
            res.status(500).json({success:fail,message:"Lỗi server"})
        }
    }
    
    async deletePost(req,res) {
        try {
         const posts =  await Post.deleteOne({ _id: req.params._id })
         res.json({success:true,posts})
         console.log("xoá thành công")

        } catch (error) {
            console.log("Error model : " + error)
            res.status(500).json({success:fail,message:"Lỗi server"})
        }
    }

    async findPost(req,res) {
        try {
         const posts =  await Post.findById({_id: req.params._id })
         res.json({success:true,posts})
         console.log("tìm thành công")

        } catch (error) {
            console.log("Error model : " + error)
            res.status(500).json({success:fail,message:"Lỗi server"})
        }
    }

    async updatePost(req,res) {
        try {
            const posts =  await Post.findById({_id: req.params._id})
            const {title,description,imgUrl}=req.body;
            const newPost= new Post({
                title,
                description,
                imgUrl
            })
            await newPost.save()
         
         res.json({success:true,posts:newPost})
         console.log("sửa thành công")

        } catch (error) {
            console.log("Error model : " + error)
            res.status(500).json({success:fail,message:"Lỗi server"})
        }
    }
    
}


 
module.exports = new postController()