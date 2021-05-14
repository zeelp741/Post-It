// All routes that include Posts

import express from 'express'
import {getPosts, createPost} from "../controllers/posts.js"

const router = express.Router();

// Request and response for all callback functions
// Call back function that executes when user visits local host

// is not reached by going to localhost:5000/, reached by going to http://localhost:5000/posts
router.get('/', getPosts)
router.post('/', createPost)

export default router