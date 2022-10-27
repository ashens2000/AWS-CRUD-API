import { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { successResponse } from "@libs/response";
import { create } from "./student-service";
import { Student } from "src/entities/student.entity";

import schema from './schema';

const createStudent: ValidatedEventAPIGatewayProxyEvent <
typeof schema
> = async (event) => {

    const student:Student=event.body as any as Student;
    const stu=await create(student);
    return successResponse({student});
};

export const main =middyfy(createStudent);