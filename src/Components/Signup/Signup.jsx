import React from 'react';
import { useState } from 'react';

const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });
const handleInput = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]: value})
}
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Signup successful!');
        setUser({name: "", email: "", password: ""});
    }

    return (
        <div className="bg-gray-100 py-12 flex justify-center pt-24 px-4">
            <div className="bg-white max-w-lg w-full rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">Signup Form</h2>
                <form action="" className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-blue-700">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            value={user.name}
                            onChange={handleInput}
                            required 
                            className="mt-1 block w-full px-4 py-2 border border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-blue-700">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value={user.email}
                            onChange={handleInput}
                            required 
                            className="mt-1 block w-full px-4 py-2 border border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your email"
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
                            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md shadow-md transition duration-300 ease-in-out"
                        >
                            Signup
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;

