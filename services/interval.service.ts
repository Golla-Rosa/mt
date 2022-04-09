import { gql, Observable } from '@apollo/client';
import client from '../apollo-client';


class IntervalService {
    public async get() {
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
          return {
            props: {
              intervals: data.data.intervals,
            },
         };    
    }

    async getOne()  {
        
    }
}

const Interval_Service = new IntervalService();
export default Interval_Service;
