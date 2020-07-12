import React from 'react';

const FriendsCard = props => {
    const {id, name, age, email} = props.friend;

    return (
      <div>
          <h2>Friends List</h2>
          <h4>id: {id}</h4>
          <h4>Name: {name}</h4>
          <p>Age: {age}</p>
          <p>Email: {email}</p>
      </div>
    );
};

export default FriendsCard;