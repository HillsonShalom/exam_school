import jwt from 'jsonwebtoken'
import { itoken } from '../models/DTOs/cookie'



export const generateToken = (data: itoken): string => {
    try {
        const secret: string = process.env.SECRET_KEY!
        const token = jwt.sign(data, secret, { expiresIn: '1h' });
        return token
    } catch(err) {
        throw err;
    }  
}



