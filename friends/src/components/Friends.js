import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import FriendsCard from './FriendsCard';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState({
        name: "",
        age: ""
    });

    useEffect(() => {
        const getData = () => {

            axiosWithAuth()
                .get("/friends")
                .then(res => {
                    console.log(res, "Friends get");
                    setFriends(res.data);
                })
                .catch(err => console.log(err));
        };
        getData();
    }, []);

    const postFriend = friend => {
        axiosWithAuth()
            .post("/friends", "new friend")
            .then(res => {
                console.log(res, "new friend")
                setFriends([
                    ...friends,
                    friend
                ]);
            });
    };

    const addFriend = e => {
        e.preventDefault();
        postFriend(newFriend);
    };

    const inputChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <form onSubmit={addFriend}>
                <input
                    type="text" 
                    name="name"
                    onChange={inputChange}
                    placeholder="name"
                    required
                />
                <input
                    type="number" 
                    name="age"
                    onChange={inputChange}
                    placeholder="age"
                    required
                />
                <button>Submit</button>
            </form>
            <div>
                {friends.map(friend => (
                    <FriendsCard key={friend.id} friend={friend} />
                ))}
            </div>
        </div>
    )}

    export default Friends;