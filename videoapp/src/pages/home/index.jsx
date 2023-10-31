import React,{useState} from "react";
import { useNavigate } from "react-router-dom"

const HomePage = () =>{

    const [roomcode ,setroomcode] =useState('');
    const [name,setname] =useState('');
    const navigate = useNavigate();

    const handleFormSubmit = (ev) =>{
        ev.preventDefault();
        navigate(`/room/${roomcode}`);
    };
    return (
        <div className="home-page">
            <form onSubmit={handleFormSubmit} className="form">
                <div className="card">
                    <label className="first">Enter Room Code</label>
                    <input value ={name} onChange={(ei) => setname(ei.target.value)} type="text" required placeholder="Enter Your Name"/>
                    <br/>
                    <input value ={roomcode} onChange={(e) => setroomcode(e.target.value)} type="text" required placeholder="Enter the room code"/>
                </div>
                <button className="submit-button" type="submit">Enter the Room</button>
            </form>
        </div>
    )
}

export default HomePage;