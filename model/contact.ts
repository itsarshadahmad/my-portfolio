import mongoose, { Document, Schema, model } from "mongoose";

export interface Contact extends Document {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const contactSchema: Schema<Contact> = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            match: [/.+\@.+\..+/, "Please use a valid email address"],
        },
        subject: {
            type: String,
            required: [true, "Subject is required"],
        },
        message: {
            type: String,
            required: [true, "Message is required"],
        },
    },
    { timestamps: true }
);

export const ContactModel =
    (mongoose.models.Contact as mongoose.Model<Contact>) ||
    model("Contact", contactSchema);
