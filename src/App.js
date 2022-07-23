import './App.css';
import {useEffect, useState} from "react";
import Post from "./components/Post";

let available = false

function App() {
    const [objkts, setObjkts] = useState([]);

    async function getObjkts() {
        available = false

        let results = await fetch('https://data.objkt.com/v2/graphql', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: `query MyQuery {
  event(order_by: {timestamp: desc}, where: {event_type: {_eq: "ask_purchase"}}, limit: 24) {
    amount
    creator {
      address
      alias
      twitter
    }
    event_type
    price
    token {
      artifact_uri
      average
      decimals
      display_uri
      highest_offer
      last_listed
      last_metadata_update
      level
      lowest_ask
      metadata
      name
      supply
      thumbnail_uri
      timestamp
      pk
      royalties {
        amount
        decimals
        token {
          artifact_uri
          average
          decimals
          description
          display_uri
          extra
          flag
          highest_offer
          is_boolean_amount
          last_listed
          last_metadata_update
          level
          lowest_ask
          metadata
          mime
          name
          ophash
          rights
          supply
          symbol
          thumbnail_uri
          timestamp
          tzip16_key
        }
      }
      token_id
    }
    fa_contract
    fa {
      name
    }
    marketplace {
      name
    }
  }
}`
            })
        })
        let objkts = await results.json();
        setObjkts(objkts.data.event)
        available = true
        console.log(objkts.data.event)
    }

    const timer = setInterval(() => available && getObjkts(), 15000)

    useEffect(() => {

        return () => clearInterval(timer)
    }, [timer])

    useEffect(() => {
        getObjkts()
    },[])

    return (
        <div className="App">
            <div className='layout'>{objkts.map(item => <Post data={item}/>)}</div>
        </div>
    );
}

export default App;
