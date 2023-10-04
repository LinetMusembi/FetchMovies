import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto py-10 px-4">
                <div className="flex justify-between flex-wrap">

                    <div className="footer-div">
                        <h1 className="text-5xl font-bold">
                            M<span className="text-yellow-500">oo</span>vie
                        </h1>
                        <p>Download Our App</p>
                    </div>

                    <div className="footer-div">
                        <h3 className="text-3xl">Navigation</h3>
                        <ul>
                            <li>Home</li>
                            <li>My List</li>
                            <li>About Us</li>
                        </ul>
                    </div>


                    <div className="footer-div">
                        <h3 className="text-3xl">Legal</h3>
                        <ul>
                            <li>General Terms</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>


                    <div className="footer-div">
                        <h3 className="text-3xl">Contact Us:</h3>
                        <ul>
                            <li>Email: support@moovie.com</li>
                            <li>Phone: +1 123-456-7890</li>
                        </ul>
                        <p>Follow Us:</p>
                        <div className="flex">
                            <a href="#" className="mr-2">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="mr-2">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="mr-2">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>


                    <div className="footer-div">
                        <h3 className="text-3xl">Share Website Via:</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>
                <hr className="my-6" />
                <p className="text-center text-gray-500 text-sm">
                    &copy; 2023 Moovie. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;