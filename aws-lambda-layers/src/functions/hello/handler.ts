import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import axios from 'axios';


const hello = async () => {
  const result = await axios.get("https://api.publicapis.org/entries");
  return formatJSONResponse({
    data: result.data?.entries[0]
  });
};

export const main = middyfy(hello);
