import {getDatabaseConnection} from '@libs/database-manager';
import {Student} from 'src/entities/student.entity';

const create = async (student: Student): Promise<Student> => {
  const studentRepository = await (
    await getDatabaseConnection()
  ).getRepository(Student);
  const newStudent: Student = await studentRepository
    .save(student)
    .catch((e) => {
      console.debug('failed to create student Record', e);
      throw new Error(e);
    });
  return newStudent;
};

const fetch = async (studentId: string): Promise<Student> => {
  const studentRepository = await (
    await getDatabaseConnection()
  ).getRepository(Student);
  const newStudent: Student = await studentRepository
    .findOneBy({id: studentId})
    .catch((e) => {
      console.debug('failed to fetch student Record', e);
      throw new Error(e);
    });
  return newStudent;
};

const fetchAll = async (): Promise<Student[]> => {
  const studentRepository = await (
    await getDatabaseConnection()
  ).getRepository(Student);
  const student: Student[] = await studentRepository.find().catch((e) => {
    console.debug('failed to fetch students ', e);
    throw new Error(e);
  });
  return student;
};
export {create, fetch, fetchAll};