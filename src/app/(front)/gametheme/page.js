"use client";

import Blogsdb from "@/Blogpage/page";
import React, { useState } from "react";
import "./game.css";

const Freetheme = () => {
    const [data, setData] = useState(Blogsdb);

    return (
        <div className="freetheme-container">
            <div className="card-grid">
                {data.map((blog, index) => (
                    <div key={index} className="product-card">
                        <div className="product-image">
                            <h3 className="product-title">{blog.title}</h3>
                            <img
                                className="product-image-pic"
                                src={blog.image}
                                alt={blog.title}
                            />
                            <ul className="social-icons">
                                <li>
                                    <div title="Quick View">
                                        <i className="fa fa-search" />
                                    </div>
                                </li>
                                <li>
                                    <div title="More Details">
                                        <i className="fa fa-shopping-cart" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="product-content">
                            <p className="product-category">{blog.category.slice(0, 20)}...</p>
                            <div className="more-details">More Details</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Freetheme;
