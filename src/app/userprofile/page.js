"use client";

import React, { useState } from "react";
import "./userprofile.css";
import { useRouter } from "next/navigation";


const Forgetpass = () => {
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const newrole = e.target[1].value;


        try {
            const res = await fetch("/api/auth/userprofile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, newrole }),
            });
            if (res.status === 201) {
                router.push("/");
            } else {
                const data = await res.json();
                setError(data.message || "Something went wrong!");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
            console.error(err);
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h1 className="title">Change Role</h1>
                <form onSubmit={handleSubmit} className="form">
                    <label className="form-label">Email</label>
                    <input type="text" placeholder="Email" required className="input" />

                    <label className="form-label">New Role</label>
                    <div className="password-wrapper">
                        <input
                            type= "text"
                            placeholder="New Role"
                            required
                            className="input role-input"
                        />
                    </div>

                    <button className="button">Change Role</button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Forgetpass;
