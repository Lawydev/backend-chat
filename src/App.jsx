import axios from "axios"
import { useState, useEffect } from "react";


function App(){
    const [user, setUser] = useState(null)
    const [Name, setName] =  useState("");
    const [gender, setGender] = useState("");


    const handleMessage = async()=>{
        if(!Name || !gender){
            alert("Field cannot be empty")
            return;
        }

        try{
            await axios.post("http://127.0.0.1:5000/", {Name, gender});

            fetchData();
            alert("Message sent successfully");
        }catch(error){
            alert(error);
        }
    }

    const fetchData = async() =>{
        const res = await axios.get("http://127.0.0.1:5000/");
        console.log(res.data);
        setUser(res.data);
    };

    useEffect(()=>{
        fetchData();
    }, [])

    return(
        <>
         <h1>My Page</h1> 
            <div>

                <div>
                    <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)} />
                    <input type="text" placeholder="enter gender" onChange={(e)=>setGender(e.target.value)} />
                    <button onClick={handleMessage}>submit</button>
                </div>

                <div>
                    {user && user.map(info =>{
                    return <h2 key={info.id}>{info.gender}:{info.Name}</h2>
                })}
                
            </div>
            </div>
        </>
        
    )
}

export default App