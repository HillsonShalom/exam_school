export interface AppResError extends Error {
    status: number;
}
export class AppResError extends Error {
    status: number;
    constructor(stat: number, msg: string){
        super(msg)
        this.status = stat
    }
}