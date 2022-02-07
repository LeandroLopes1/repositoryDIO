import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import UserRepository from "../repositories/user.repository";

const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res:Response, next: NextFunction) => {
    const users = await UserRepository.findAllUsers();
    res.status(StatusCodes.OK).send({users});
});

usersRoute.get('/users/:uuid', async (req: Request, res:Response, next: NextFunction) => {
    try {
        const uuid = req.params.uuid;
        const user = await UserRepository.findById(uuid);
        res.status(StatusCodes.OK).send({user});
    } catch (error) {
        next(error);
    }
});

usersRoute.post('/users', async (req: Request, res:Response, next: NextFunction) => {
    const newUser = req.body;

    const user = await UserRepository.createUser(newUser);

    res.status(StatusCodes.CREATED).send({user});
});

usersRoute.put('/users/:uuid', async (req: Request, res:Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const updatedUser = req.body;

    updatedUser.uuid = uuid;

    await UserRepository.updateUser(updatedUser);
    res.status(StatusCodes.OK).send({user: updatedUser});
});

usersRoute.delete('/users/:uuid', (req: Request, res:Response, next: NextFunction) => {
    const uuid = req.params.uuid;

    UserRepository.deleteUser(uuid);

    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;