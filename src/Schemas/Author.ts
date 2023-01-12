import mongoose from "mongoose";

export interface IAuthor {
    name: string;
}

export interface IAuthorModel extends IAuthor, mongoose.Document {}

const AuthorSchema: mongoose.Schema = new mongoose.Schema(
    {
        name: {type: String, required: true}
    },
    {
        versionKey: false
    }
)

export default mongoose.model<IAuthorModel>('Author', AuthorSchema);