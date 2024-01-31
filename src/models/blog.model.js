import mongoose,{ Schema } from "mongoose";

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        blogBody: {
            type: String,
            required: true
        },
        blogImage: {
            type: String
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        isPublished: {
            type: Boolean,
            default: true
        }
    }, {timestamps: true}
)

export const Blog = mongoose.model("Blog", blogSchema)