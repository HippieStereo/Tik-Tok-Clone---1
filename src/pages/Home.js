import FollowersColumn from "../components/FollowersColumn";
import axios from "axios";
import {useEffect, useState} from "react";
import Card from "../components/Card";

const Home = () => {

    const [users, setUsers] = useState();
    let descendingUsers;

    const addData = async () => {

        await axios.post('/.netlify/functions/AddData',
            {headers: {'Content-Type': 'application/json'}}
            );

    }

    const fetchData = async () => {

        const results = await axios.get(
            '/.netlify/functions/Posts',
            {headers: {'Content-Type': 'application/json'}}
            );

        setUsers(results.data);

    }

    useEffect(() => {
        addData();
        fetchData();
    }, []);

    if (users){
        descendingUsers = Object.values(users[1]).sort((a,b) => a.id < b.id ? 1 : -1);
    }

    return (
        <>
            <div className='container'>
               <FollowersColumn />
                {descendingUsers && (
                   <div className='feed'>
                       {descendingUsers.map((descendingUser, index) => (
                           <Card
                               key={index}
                               user={descendingUser}
                           />
                       ))}
                    </div>
                )}
                <div className="suggested-box">
                    <div className="section">
                        <div className="suggested">
                            <h2 className="bold">Suggested accounts</h2>
                            <div className="break" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
