// Handles all logic for the routes
// Does all the requesting and response

import PostMessage from '../models/postMessage.js'

// makes function asynchronous 
export const getPosts = async (req, res) =>{
    try{
            // is an asynchronous action
        const postMessages = await PostMessage.find()

        console.log(postMessages)

            // Indicated if request has succeded
        res.status(200).json(postMessages)

    } catch (error) {
            // Displays page not Found Error
        res.status(404).json( {message: error.message} )

    }


    res.send('WORKING')
}

// Makes createPost function asynchronous
export const createPost = async (req, res) =>{
    const post = req.body

    const newPost = new PostMessage(post)

    try {
            // is an asynchronous action
        await newPost.save()

            // 201 means succecful creation
        res.status(201).json(newPost)

    } catch (error) {
            // When a request conflicts with the current state of the server
        res.status(409).json( {message: error.message} )

    }
}
