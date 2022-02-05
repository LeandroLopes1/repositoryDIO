import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res:Response, next: NextFunction) => {
    const users = [{ username: 'John' }, { username: 'Sally' }];
    res.status(StatusCodes.OK).send({users});
});

usersRoute.get('/users/:id', (req: Request, res:Response, next: NextFunction) => {
    const id = req.params.id;
    res.status(StatusCodes.OK).send({id});
});

usersRoute.post('/users', (req: Request, res:Response, next: NextFunction) => {
    const newUser = req.body;

    res.status(StatusCodes.CREATED).send({newUser});
});

usersRoute.put('/users/:id', (req: Request, res:Response, next: NextFunction) => {
    const id = req.params.id;
    const updatedUser = req.body;

    updatedUser.id = id;
    res.status(StatusCodes.OK).send({updatedUser});
});

usersRoute.delete('/users/:id', (req: Request, res:Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;