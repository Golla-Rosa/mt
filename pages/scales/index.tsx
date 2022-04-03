import { gql } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import client from '../../apollo-client';
import { DataService } from '../global/global.service';

async function fetchData() {
  const  data = await client.query({
      query: gql`
      query AllEntitiesQuery {
          scales {
              code
              name
            }
          }
      `
      
    });
    console.log("querying data")
    return {
      props: {
        scales: data.data.scales,
      },
   };

}
export default function index(props) {
  const [scales, setscales] = useState([])
const [isLoading, setLoading] = useState(false)

useEffect(() => {
    setLoading(true)
    fetchData().then(({props}) => {
           setscales(props.scales)
          console.log(scales)
      });
}, [])

  return scales ? (
  <div className="h-96 overflow-auto-scroll p-5">
          { scales.map(function(item) {
                  return <div className="m-2 shadow-md border-sm" key={'k' + item.code}>
                      {item.name}
                      </div>
              })
          }
          

  </div>) : <></>

}