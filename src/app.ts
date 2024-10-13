import exp from 'express'
import cookieParser from 'cookie-parser'
import authRtr from './routes/authRouter'
import teachersRtr  from './routes/teacherRouter'
import studentsRtr  from './routes/studentsRouter'
import classroomRtr from './routes/classroomRouter'
import verifyUser from './middlewares/authMiddleware'

import 'dotenv/config'
import { dbConnection } from './DAL/dbConnection'
const port = process.env.PORT

const app = exp();
dbConnection();

// middlewares
app.use(exp.json());
app.use(cookieParser());
// app.use(responseErrorHandler);
app.use(verifyUser);


app.use('/auth'     , authRtr     );
app.use('/students' , studentsRtr );
app.use('/teachers' , teachersRtr );
app.use('/class'    , classroomRtr);

app.listen(port, () => {
    console.log(`Listening on 0.0.0.0:${port}...`);
})