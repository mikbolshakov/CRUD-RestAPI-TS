import mongoose from 'mongoose';

export interface IBook {
    title: string;
    author: string;
}

export interface IBookModel extends IBook, mongoose.Document {}

const BookSchema: mongoose.Schema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Author' }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<IBookModel>('Book', BookSchema);