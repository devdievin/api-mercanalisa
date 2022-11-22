import { NextFunction, Request, Response } from "express"

export const route404 = ((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send({ error: "Sorry can't find that! This route does not exist.", status: "404" })
    next()
})