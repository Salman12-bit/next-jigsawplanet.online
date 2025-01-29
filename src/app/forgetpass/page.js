"use client";

import React, { useState } from "react";
import "./forgetpass.css";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Forgetpass = () => {
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const newpassword = e.target[1].value;


        try {
            const res = await fetch("/api/auth/forgetpass", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, newpassword }),
            });
            if (res.status === 201) {
                router.push("/login");
            } else {
                const data = await res.json();
                setError(data.message || "Something went wrong!");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
            console.error(err);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h1 className="title">Forget Password</h1>
                <form onSubmit={handleSubmit} className="form">
                    <label className="form-label">Email</label>
                    <input type="text" placeholder="Email" required className="input" />

                    <label className="form-label">New Password</label>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="New Password"
                            required
                            className="input password-input"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="toggle-password"
                        >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </button>
                    </div>

                    <button className="button">Forget Password</button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Forgetpass;
