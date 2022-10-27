import { successResponse } from "@libs/response";
import { Student } from "src/entities/student.entity";
import { fetch,fetchAll } from "./student-service";


const fetchAllStudent= async (event) =>{

     const student: Student[] = await fetchAll();
    return successResponse({student});

};

export const main=fetchAllStudent;