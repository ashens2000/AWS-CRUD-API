import { successResponse } from "@libs/response";
import { Student } from "src/entities/student.entity";
import { fetch } from "./student-service";

const fetchStudent=async(event) =>{

    const student:Student=await fetch(event.pathParameters.stuid);
    return successResponse({student});

};

export const main=fetchStudent;