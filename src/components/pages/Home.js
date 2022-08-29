import React from 'react'
import './Home.css'
import { useEffect, useState } from "react";
import Post from '../../components/Post'
import { allObjkts } from '../../queries'

function Home() {

    const [objkts, setObjkts] = useState([]);

    const getObjkts = async () => {

        let results = await fetch('https://data.objkt.com/v2/graphql', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: allObjkts
            })
        })
        let objkts = await results.json();

        setObjkts(objkts.data.event)
        console.log(objkts.data.event)
    }

    useEffect(() => {
        getObjkts();
        const myInterval = setInterval(getObjkts, 15000);

        return () => {
            clearInterval(myInterval);
        };
    }, []);



    return (
        <div className='layout'>
            {objkts.map(item =>
                <Post
                    data={item}
                    key={item.token.pk + Math.floor(Math.random() * 1000)}
                />
            )}
        </div>
    )
}

export default Home