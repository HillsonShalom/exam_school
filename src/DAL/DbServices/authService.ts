import { registerDTO } from "../../models/DTOs/createDTO";
import { Classroom, iclassroom } from "../../models/schemas/classroomSchema"
import { istudent, Student } from "../../models/schemas/studentSchema"
import { iteacher, Teacher } from "../../models/schemas/teacherSchema";
import bcrypt from 'bcrypt'



class service {
    
    static createStudent = async (obj: registerDTO): Promise<istudent | Error> => {
        try {
            const found = await Classroom.findOne({ name: obj.classroom });
            if (!found) throw new Error("There is no such class");

            const std = new Student({
                details: {
                    username: obj.username,
                    password: obj.password,
                    email: obj.email,
                    role: 'student'
                },
                classroom: found._id
            });
            found.students.push(std.id);
            await found.save();
            await std.save();
            return std
        } catch(err) {
            return err as Error
        }   
    }

    static createTeacher = async (name: string, password: string, email: string, classroom: string): Promise<[iclassroom, iteacher] | Error> => {
        try {
            const newClass = new Classroom({ name: classroom });
            await newClass.save()

            const tchr = new Teacher({
                details: {
                    username: name,
                    password: password,
                    email: email,
                    role: 'teacher'
                },
                classroom: newClass._id
            });

            await tchr.save();

            return [newClass, tchr]
        } catch(err) {
            return err as Error
        }
    }

    static getOne = async (name: string): Promise<iteacher | istudent | Error> => {
        try {
            let found: iteacher | istudent | null = 
                await Teacher.findOne({ "details.username": name }) ||
                await Student.findOne({ "details.username": name })
            if (!found) throw new Error('wrong name!')
            return found
        } catch(err) {
            return err as Error
        }
    }
}

export default service

