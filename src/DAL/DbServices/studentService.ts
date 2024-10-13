import { Classroom } from "../../models/schemas/classroomSchema"
import { Student } from "../../models/schemas/studentSchema"


class service {
    static create = async (name: string, password: string, email: string, classroom: string) => {
        try {
            const found = await Classroom.findOne({ name: classroom });
            if (!found) throw new Error("There is no such class");

            const std = new Student({
                details: {
                    username: name,
                    password: password,
                    email: email,
                    role: 'student'
                },
                classroom: found._id
            });

            await std.save();
        } catch(err) {
            throw err
        }
        
    }
}

export default service