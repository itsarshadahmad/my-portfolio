"use client";

export default function ContactForm() {
    return (
        <form className="mt-8 space-y-4">
            <input
                type="text"
                placeholder="Name"
                className="w-full py-2.5 px-4 text-gray-200 border-2 focus:border-blue-800 focus:bg-transparent text-sm outline-none transition-all rounded-lg"
            />
            <input
                type="email"
                placeholder="Email"
                className="w-full py-2.5 px-4 text-gray-200 border-2 focus:border-blue-800 focus:bg-transparent text-sm outline-none transition-all rounded-lg"
            />
            <input
                type="text"
                placeholder="Subject"
                className="w-full py-2.5 px-4 text-gray-200 border-2 focus:border-blue-800 focus:bg-transparent text-sm outline-none transition-all rounded-lg"
            />
            <textarea
                placeholder="Message"
                rows={4}
                className="w-full py-2.5 px-4 text-gray-200 border-2 focus:border-blue-800 focus:bg-transparent text-sm outline-none transition-all rounded-lg"
            ></textarea>
            <button
                type="button"
                className="text-white bg-black hover:bg-white hover:text-black hover:font-semibold border-2 border-white cursor-pointer tracking-wide text-sm px-4 py-2.5 w-full outline-none rounded-lg"
            >
                Send
            </button>
        </form>
    );
}
