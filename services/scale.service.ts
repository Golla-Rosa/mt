import { gql } from '@apollo/client';
import client from '../apollo-client';

class ScaleService {
    public async get() {
        const  data = await client.query({
            query: gql`
            query AllEntitiesQuery {
                scales {
                    code
                    name
                  }
                }`,
          });
          return {
            props: {
              scales: data.data.scales,
            },
         };
    }

    public async getOne()  {
        
    }
}

const Scale_Service = new ScaleService();
export default Scale_Service;