import exp from 'express'
import authRtr from './routes/authRouter'
import teachersRtr  from './routes/teacherRouter'
import studentsRtr  from './routes/studentsRouter'
import classroomRtr from './routes/classroomRouter'

import 'dotenv/config'
import { dbConnection } from './DAL/dbConnection'
const port = process.env.PORT

const app = exp();
dbConnection();

app.use(exp.json())

app.use('/auth'     , authRtr     );
app.use('/students' , studentsRtr );
app.use('/teachers' , teachersRtr );
app.use('/classroom', classroomRtr);

app.listen(port, () => {
    console.log(`Listening on 0.0.0.0:${port}...`);
})