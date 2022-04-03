import { gql } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import client from '../../apollo-client';
import { DataService } from '../global/global.service'

async function fetchData() {
    const  data = await client.query({
        query: gql`
        query AllEntitiesQuery {
            intervals {
                code
                name
              }
            }
        `
        
      });
      console.log("querying data")
      return {
        props: {
          intervals: data.data.intervals,
        },
     };

}
export default function index({note}) {
    const [intervals, setIntervals] = useState([])
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
        setLoading(true)
        fetchData().then(({props}) => {
               setIntervals(props.intervals)
          });
    }, [])
    return (
    <div className="p-5">{
            intervals.map((interval) => {
                return <div className="m-2 shadow-md border-sm" key={'k' + interval.code}>{interval.name}</div>;
            } )
        }</div>
  )
}
