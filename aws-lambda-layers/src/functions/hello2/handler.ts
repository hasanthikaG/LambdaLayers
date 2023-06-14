import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { getTotal } from 'lambda-layers2';


const hello2 = async (event) => {
  const {num1, num2} = JSON.parse(event.body);
  const result = getTotal(num1, num2);

  return formatJSONResponse({
    data: result
  });
};

export const main2 = middyfy(hello2);
