import { Request, Response } from "express"

export const test = (req: Request, res: Response) => {
    res.send('api route is working')
}