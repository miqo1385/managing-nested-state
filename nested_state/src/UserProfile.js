import React, { useState } from 'react';

function UserProfile() {
    // State Initialization
    const [userProfile, setUserProfile] = useState({
        name: '',
        email: '',
        address: {
            street: '',
            city: '',
            country: ''
        }
    });

    // Implementing Nested Updates
    const updateAddress = (street, city, country) => {
        setUserProfile(prevProfile => ({
            ...prevProfile,
            address: {
                ...prevProfile.address,
                street: street,
                city: city,
                country: country
            }
        }));
    };

    // UI Elements
    return (
        <div>
            <h2>User Profile</h2>
            <div>
                <label>Street: </label>
                <input
                    type="text"
                    value={userProfile.address.street}
                    onChange={e => updateAddress(e.target.value, userProfile.address.city, userProfile.address.country)}
                />
            </div>
            <div>
                <label>City: </label>
                <input
                    type="text"
                    value={userProfile.address.city}
                    onChange={e => updateAddress(userProfile.address.street, e.target.value, userProfile.address.country)}
                />
            </div>
            <div>
                <label>Country: </label>
                <input
                    type="text"
                    value={userProfile.address.country}
                    onChange={e => updateAddress(userProfile.address.street, userProfile.address.city, e.target.value)}
                />
            </div>
            {/* Display Updated Profile */}
            <div>
                <h3>Updated Profile:</h3>
                <p>Name: {userProfile.name}</p>
                <p>Email: {userProfile.email}</p>
                <p>Address: {userProfile.address.street}, {userProfile.address.city}, {userProfile.address.country}</p>
            </div>
        </div>
    );
}

export default UserProfile;
