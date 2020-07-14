import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom'

const AddFriendForm = () =>{

    const [formState, setFormState] = useState({
        name: "",
        age: "",
        email: "",
        id: Date.now()   
    });

    let history = useHistory();

    const formSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', formState)
            .then(res => {
                console.log("Axios addfriend submit works", res);
                history.push("/protected")
            })
            .catch(err => console.log(err))
        setFormState({
        name: "",
        age: "",
        email: "",
    })}

    const inputChange = (e) => {
       setFormState({ ...formState, [e.target.name]: e.target.value})}

        return (
        <div>
            <form onSubmit={formSubmit}>
                <label htmlFor="name">
                    Name:
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formState.name}
                        onChange={inputChange}
                        required
                    />
                </label>
                <label htmlFor="age">
                    Age:
                    <input 
                        name="age"
                        id="age"
                        value={formState.age}
                        onChange={inputChange}
                        required
                    >
                    </input>
                </label>
                <label htmlFor="email">
                    Email
                    <input 
                        name="email"
                        id="email"
                        value={formState.email}
                        onChange={inputChange}
                        required
                    >
                    </input>
                </label>
                <button className="submitButton">Submit</button>    
            </form>  
        </div>
        )
    
}

export default AddFriendForm;