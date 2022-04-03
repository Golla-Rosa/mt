import Chords from "./chords";
import Intervalles from "./intervalles";
import Notes from "./notes";
import Scales from "./scales";
import {Types} from '../public/data/constants/constants'
import { useState } from "react";
import client from "../apollo-client";
import { gql } from "@apollo/client";



export default function Configuration({notes}) {
  const [type, setType] = useState('0');
  const [note, setNote] = useState();
  const configuration = {type, note}
  const handleType = (event) => {
    setType(event.target.value);
  }
  const handleNote = (event) => {

    setNote(event.target.value)
    
  }
  const renderSwitch = () => {
    console.log(type)
    switch (type) {
      
      case '0':
          return   <div className="col-start-1 col-end-6  row-span-4 border-lg shadow-lg ">
          <div className="h-5 bg-blue-300 text-center shadow-sm">
              <h3>Notes</h3>
            </div>
            <div className="h-96 overflow-y-scroll">
          <Notes ></Notes>
    
            </div>
      </div>
      
      case '1': return <div className="col-start-1 col-end-6  row-span-4 border-lg shadow-lg ">
      <div className="h-5 bg-blue-300 text-center shadow-sm">
              <h3>Intervals</h3>
            </div>
            <div className="h-96 overflow-y-scroll">
            <Intervalles note={note}></Intervalles>
    
            </div>
        
      <div className="container mx-auto px-20">
    
    <div >
      
    </div>
    </div>
      </div>
        return
      case '2':  return <div className="col-start-1 col-end-6 row-span-4 border-lg shadow-lg ">
      <div className="h-5 bg-blue-300 text-center shadow-sm">
              <h3>Chords</h3>
            </div>
            <div className="h-96 overflow-y-scroll">
            <Chords note={note}></Chords>
    
            </div>
    
      </div>
          return
      case '3':  return <div className="col-start-1 col-end-6 row-span-4 border-lg shadow-lg ">
      <div className="h-5 bg-blue-300 text-center shadow-sm">
              <h3>Scales</h3>
            </div>
            <div className="h-96 overflow-y-scroll">
            <Scales></Scales>
    
            </div>
    
      </div>
        return
    }
  }
    // panels section
    return <>
<div className="grid grid flex h-full overflow-y-auto flex-col    border-r min-h-screen relative  grid-cols-6 gap-4 mt-5">
  <div className="col-start-1 grid grid-cols-12  col-span-5 border-lg shadow-lg">
    <div className="col-span-2">
     <select onChange={handleType} name="" id="">
        {Types.map((t) => <option value={t.id}>{t.name}</option>)}

     </select>
    </div>
    <div className="col-span-2">
    <select onChange={handleNote}>
      {
        notes ? notes.map((n) => {
          return <option value={n.name}>{n.name}</option>
        }) : <></>
      }
    </select>
    </div>
    <div className="col-span-2">Nature</div>
    <div className="col-span-2"></div>
  </div>
  <div className="col-start-1  h-48 col-end-3 border-lg shadow-lg">basic informations</div>
  <div className="col-end-6 col-start-3  h-48 border-lg shadow-lg">Image</div>

{  renderSwitch()}

  
 
  
 
</div>
    </>
}


async function fetchData() {
  const filterChordsQuery = "query filterChords($input: FindChordInput!) {     filterChords(input: $input) {   code    name    blueprint    notes {code name}    }}"
  const  data = await client.query({

      query: gql`
      query AllEntitiesQuery {
          scales {
              code
              name
            }
          notes {
              code
              name
          } 
          intervals {
              code
              name
          }
          chords {
            code 
            name
          }
          }
      `
      
    });
    console.log("querying data")
    return {
      props: {
        data: data.data
      },
   };

}