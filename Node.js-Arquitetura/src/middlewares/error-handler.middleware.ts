import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import DatabaseError from '../models/errors/database.error.model';

function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    if (error instanceof DatabaseError) {
        res.status(StatusCodes.BAD_REQUEST).send({ error: error.message });
    } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: error.message });
    }
}

export default errorHandler;
