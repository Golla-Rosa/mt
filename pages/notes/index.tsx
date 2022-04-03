import React, { useEffect, useState } from 'react'
import { DataService } from '../global/global.service'
import Router from 'next/router'
import { gql } from '@apollo/client';
import client from '../../apollo-client';


export async function getServerSideProps() {
    const  data = await client.query({
        query: gql`
        query AllEntitiesQuery {
            countries {
                code
                name
              }
            }
        `
        
      });
      console.log("querying data")
      return {
        props: {
          notes: data.data.notes,
        },
     };
}

async function fetchData() {
    const  data = await client.query({
        query: gql`
        query AllEntitiesQuery {
            notes {
                code
                name
              }
            }
        `
        
      });
      console.log("querying data")
      return {
        props: {
          notes: data.data.notes,
        },
     };

}
export default function index() {
    const [notes, setNotes] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
      setLoading(true)
      fetchData().then(({props}) => {
             setNotes(props.notes)
            console.log(notes)
        });
  }, [])
  
    return notes ? (
    <div className="h-96 overflow-auto-scroll p-5">
            { notes.map(function(item) {
                    return <div className="m-2 shadow-md border-sm" key={'k' + item.code}>
                        {item.name}
                        </div>
                })
            }
            

    </div>) : <></>
  
}
