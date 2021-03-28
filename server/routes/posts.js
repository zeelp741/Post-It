// Only does routes, all logic is been done in ./server/controllers/posts.js
// Makes it easier to just view routes without requests and responses

import express from 'express';

    // Imports posts from controllers file and names it getPosts
import { getPosts, createPost} from '../controllers/posts.js'

const router = express.Router();

    // gets getPosts from the router 
router.get('/', getPosts)
    // Gets getPosts from router
router.get('/', createPost)


export default router;


