import exp from 'express'
import 'dotenv/config'
const port = process.env.PORT

const app = exp()

app.use(exp.json())

app.listen(port, () => {
    console.log(`Listening on 0.0.0.0:${port}...`);
})