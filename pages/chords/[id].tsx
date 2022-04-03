import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import client from "../../apollo-client";
import { Types } from "../../public/data/constants/constants";
import Notes from "../notes";
async function fetchData(chord) {
    console.log("fetchdata", chord)
    var variables = {"input":  {
        "code": chord?? "CH41",
        "note": [],
        "blueprint": "",
        "name": ""
        
        
      }}
    console.log(variables)
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
        variables: variables
        
      });
      return {
        props: {
          chord: data.data.filterChords,
        },
     };

}

export default function Configuration() {
    const router = useRouter();
    const {id} = router.query;
    const [chord , setChord] = useState();    
    const [type, setType] = useState('0');

    var chordtmp ;
    const handleType = (event) => {
      setType(event.target.value);
    }
    
    useEffect(() => {
        fetchData(id).then(({props}) => {
            setChord(props.chord)
       }); 
    })

    const renderSwitch = () => {
      console.log(type)
      switch (type) {
        
        case '0':
            return   <div className="col-start-1 col-end-6  row-span-4 border-lg shadow-lg ">
            <div className="h-5 bg-blue-300 text-center shadow-sm">
                <h3>Notes</h3>
              </div>
              <div className="h-96 overflow-y-scroll">
                {chordtmp?.notes?.map((n) => {
                    return <div> {n.name}</div>
                })}
      
              </div>
        </div>
        
        case '1': return <div className="col-start-1 col-end-6  row-span-4 border-lg shadow-lg ">
        <div className="h-5 bg-blue-300 text-center shadow-sm">
                <h3>Intervals</h3>
              </div>
              <div className="h-96 overflow-y-scroll">
      
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
      
              </div>
      
        </div>
            return
        case '3':  return <div className="col-start-1 col-end-6 row-span-4 border-lg shadow-lg ">
        <div className="h-5 bg-blue-300 text-center shadow-sm">
                <h3>Scales</h3>
              </div>
              <div className="h-96 overflow-y-scroll">
      
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
     </div>
      <div className="col-span-2">Nature</div>
      <div className="col-span-2"></div>
    </div>
    <div className="col-start-1  h-48 col-end-3 border-lg shadow-lg">
        
    </div>
    <div className="col-end-6 col-start-3  h-48 border-lg shadow-lg">Image</div>
  
  {  renderSwitch()}
  
    
   
    
   
  </div>
      </>
  }
  