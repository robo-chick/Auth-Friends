import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import FriendsCard from './FriendsCard';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState({
        id: "",
        name: "",
        age: "",
        email: "",
        value: ""
    });
    const [id, setId] = useState("");

    useEffect(() => {
        const getData = () => {

            axiosWithAuth()
                .get("/friends")
                .then(res => {
                    console.log(res, "Friends");
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

    //stretch - delete friend
    const handleDeleteForm = e => {
        e.preventDefault();
        console.log(id);
        setId(e.target.value);
    };


    const removeFriend = e => {
        e.target.reset();
        axiosWithAuth()
            .delete(`/friends/${id}`)
            .then(res => {
                console.log("delete", res)
                setNewFriend(res.data);
            });
    };

    return (
        <div>
            <h1>Add Friend</h1>
            <form onSubmit={addFriend}>
                <input
                    type="text" 
                    name="name"
                    onChange={inputChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="number" 
                    name="age"
                    onChange={inputChange}
                    placeholder="Age"
                    required
                />
                <input
                    type="email"
                    name="email"
                    onChange={inputChange}
                    placeholder="Email"
                    required
                />
                <button>Submit</button>
            </form>
            <div>
                {friends.map(friend => (
                    <FriendsCard key={friend.id} friend={friend} />
                ))}
            </div>
            <div>
                <h2>Remove Friend</h2>
                <form onSubmit={removeFriend}>
                    <input
                        type="text"
                        name="id"
                        onChange={handleDeleteForm}
                        placeholder="Id"
                    />
                    <button>Remove</button>
                </form>
            </div>
        </div>
    )}

    export default Friends;