import PostMessage from '../models/postMessage.js'

// async function because postMessage.find() takes time 
export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        // Https Status: Request Succedded
        res.status(200).json(postMessages);
    } catch (error) {
        // Https Status: Page Not Found 
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) =>{
    const post = req.body
    const newPost = new PostMessage(post)
    try{
        await newPost.save()

        // Https Status: New Resource Created 
        res.status(201).json(newPost)
    } catch (error){    
        // Https Status: Conflict with the current state of the resource 
        res.status(409).json({message: error.message})
    }
}