import { Document, Schema, model } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    image_url?: string;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image_url: { type: String },
});

const User = model<IUser>('User', userSchema);

export default User;