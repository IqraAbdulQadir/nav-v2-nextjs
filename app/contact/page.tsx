import React from "react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact : React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
            <NavBar /> 
            <div className="p-6">
                <h1 className="text-3xl font-bold">Contact</h1>
            <p className="mt-4">This is my Contact page</p>
            </div>
            </main>
            <Footer />
        </div>
     )
}

export default Contact;
