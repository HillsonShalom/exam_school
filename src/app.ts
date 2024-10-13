import exp from 'express'
import authRtr from './routes/authRouter'
import teachersRtr from './routes/teacherRouter'
import studentsRtr from './routes/studentsRouter'

import 'dotenv/config'
const port = process.env.PORT

const app = exp()

app.use(exp.json())

app.use('/auth'    , authRtr    );
app.use('/students', studentsRtr);
app.use('/teachers', teachersRtr);

app.listen(port, () => {
    console.log(`Listening on 0.0.0.0:${port}...`);
})