import React, { useState } from 'react';

export default function SignUpForm({ signUp }) {
    const [formData, setFormData] = useState({
        name: ""
    });

    function handleUser(evt) {
        evt.preventDefault();
        signUp(formData.name);
    }

    function handleChange(evt) {
        const newFormData = { ...formData, [evt.target.name]: evt.target.value };
        setFormData(newFormData);
    }

    return (
        <>
            <h3>Enter Username to sign up</h3>
            <form onSubmit={handleUser}>
                <div>
                    <label>Username</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </>
    );
}