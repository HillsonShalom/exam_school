import { Schema } from "mongoose";
import { Classroom, iclassroom } from "../../models/schemas/classroomSchema"
import { Student } from "../../models/schemas/studentSchema"
import { iteacher, Teacher } from "../../models/schemas/teacherSchema";


class service {
    static create = async (name: string, password: string, email: string, classroom: string): Promise<[iclassroom, iteacher]> => {
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
            throw err
        }
    }
}

export default service