import 'express'
import { Response, Request } from 'express'
import { AppResError } from './appResponse'
import { itoken } from '../DTOs/cookie'

declare module 'express' {
    interface Response {
        appError?: AppResError | undefined
    }

    interface Request {
        user?: itoken | undefined
    }
}

