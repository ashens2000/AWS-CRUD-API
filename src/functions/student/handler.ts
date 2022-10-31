import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const createStudent: ValidatedEventAPIGatewayProxyEvent<typeof schema> 
= async (event) => {
  return formatJSONResponse({
    
  });
};

export const main = middyfy(createStudent);
