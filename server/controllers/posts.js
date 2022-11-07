import PostMessage from "../models/postMessage.js"
export const getPost= async (req , res)=>{
    try {
        const postMessages=await PostMessage.find();
        console.log(postMessages)
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
export const createPost= async (req , res)=>{
    // console.log("Idhar aaya")
    const post=req.body;
    const newPost=new PostMessage(post);
    // console.log(newPost)
    try {
        await newPost.save()
        res.status(201).json(newPost);
    } 
    catch (error) {
        res.status(400).json({message:error.message});
    }
}