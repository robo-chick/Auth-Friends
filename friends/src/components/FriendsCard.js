import React from 'react';

const FriendsCard = props => {
    const {name, age, email} = props.friend;

    return (
        <div>
            <h2>Name: {name}</h2>
            <div>
                <p>Age: {age}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    );
};

export default FriendsCard;