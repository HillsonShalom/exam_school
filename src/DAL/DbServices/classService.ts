import { itoken } from "../../models/DTOs/cookie";
import { registerDTO } from "../../models/DTOs/createDTO";
import { AppResError } from "../../models/extensions/appResError";
import { Classroom, iclassroom } from "../../models/schemas/classroomSchema"
import { istudent, Student } from "../../models/schemas/studentSchema"
import { iteacher, Teacher } from "../../models/schemas/teacherSchema";



class service {
    
    static getAllStudents = async (user: itoken): Promise<istudent[] | Error> => {
        try {
            const teacher = await Teacher.findOne({ "details.username": user.name });
            if (!teacher) throw new AppResError(401, 'wrong name!');
            const tClass = await Classroom.findById(teacher.classroom).populate('students')
            return tClass!.students
        } catch(err) {
            return err as Error
        }   
    }
}

export default service

