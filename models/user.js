import mongoose, { Schema } from "mongoose";

export const userSchema = new Schema(
    {
        username : String,
        phone : Number
    },
    {
        timestamps: true
    }
)

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User