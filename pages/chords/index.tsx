import { gql } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import client from '../../apollo-client';
import { DataService } from '../global/global.service';

async function fetchData(note : any | null) {
  const  data = await client.query({
      query: gql`
      query filterChords($input: FindChordInput!) { 
        filterChords(input: $input) { 
       code
        name
        blueprint
        notes {code name}
        }
      }
      `,
      variables: {"input":  {
        "code": "",
        "note": [],
        "blueprint": "",
        "name": note ?? ""
        
        
      }}

      
    });
    console.log("querying data")
    return {
      props: {
        chords: data.data.filterChords,
      },
   };

}
export default function index({note}) {
  console.log(note);
  const [chords, setChords] = useState([])
const [isLoading, setLoading] = useState(false)

useEffect(() => {
    setLoading(true)
    fetchData(note).then(({props}) => {
      console.log(props);
           setChords(props.chords)
      });
}, [chords, note])

  return chords ? (
  <div className="h-96 overflow-auto-scroll p-5">
          { chords.map(function(item) {
                  return <div className="m-2 shadow-md border-sm" key={'k' + item.code}>
                      {item.name}
                      </div>
              })
          }
          

  </div>) : <></>

}