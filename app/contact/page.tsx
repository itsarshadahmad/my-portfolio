import ContactForm from "app/components/contact-form";
import React from "react";

const Contact = () => {
    return (
        <div className="p-4 mx-auto max-w-xl">
            <h1 className="text-3xl text-white font-semibold text-center">
                Contact
            </h1>
            <ContactForm />
        </div>
    );
};

export default Contact;
