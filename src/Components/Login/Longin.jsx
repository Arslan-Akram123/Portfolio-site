import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Login successful!');
        setUser({ username: "", password: "" });
    }
    return (
        <div className="bg-gray-100 py-12 flex justify-center pt-24 px-4">
            <div className="bg-white max-w-lg w-full rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">Login</h2>
                <form action="" className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-blue-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={handleInput}
                            required
                            id="username"
                            className="mt-1 block w-full px-4 py-2 border border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your username"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-blue-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={user.password}
                            onChange={handleInput}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your password"
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow-md transition duration-300 ease-in-out"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4">
                    <Link to="/signup" className="text-blue-600 hover:text-bule-700 font-medium hover:underline">Signup here</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
