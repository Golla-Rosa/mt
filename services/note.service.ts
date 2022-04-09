import { gql, Observable } from '@apollo/client';
import client from '../apollo-client';


class NoteService {
    public async get() {
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
          return {
            props: {
              notes: data.data.notes,
            },
         };
    }

    public async getOne()  {
        
    }
}

const Note_Service = new NoteService();
export default Note_Service;
