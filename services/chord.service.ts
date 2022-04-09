import { gql, Observable } from '@apollo/client';
import client from '../apollo-client';


class ChordService {
    public async get() {
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
              "name":  ""
              
              
            }}
      
            
          });
          console.log("querying data")
          return {
            props: {
              chords: data.data.filterChords,
            },
         };
    }

    async getOne()  {
        
    }
}

const Chord_Service = new ChordService();
export default Chord_Service;
