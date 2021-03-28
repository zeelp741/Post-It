import mongoose from 'mongoose'


// Defines the strucutre of the document
// Specifies what each post must have
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,

        // Sets the like amount to zero at the beginning
    likeCount: {
        type: Number,
        default: 0
    },

    // Sets the date where the post is created
    createdAt:{
        type: Date,
        default: new Date()
    },

})

// Turns Schema into model
// Exporting mongoose model to file 
const PostMessage = mongoose.model('PostMessage', postSchema)
export default PostMessage
