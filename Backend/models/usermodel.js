import mongoose from "mongoose";
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },

        email: {
            type: String,
            require: true,
            unique: true,
        },

        password: {
            type: String,
            require: true,
        },
        branch: {
            type: String,
            require: true,
        },
        year: {
            type: String,
            require: true,
        },
        address: {
            type: String,
            require: true,
        },
    },
    {
      timestamps: true,
    }
);
const User = mongoose.model("User", userSchema);

export default User;
