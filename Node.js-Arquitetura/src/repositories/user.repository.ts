import db from '../db';
import User from '../models/user.model';
import  DatabaseError from '../models/errors/database.error.model';


class UserRepository {
   
    async findAllUsers(): Promise<User[]> {
        
        const query  = `SELECT uuid, username FROM application_user`;

        const { rows } = await db.query<User>(query);
        return rows || [];     
    }

    async findById(unid: string): Promise<User> {
        try {
            
            const query  = `SELECT uuid, username FROM application_user WHERE uuid = $1`;
    
            const { rows } = await db.query<User>(query, [unid]);
            return rows[0] || null;
        
        } catch (error) {
            throw new DatabaseError('Erro na consulta de usuário por id', error);
        }
    }

    async createUser(user: User): Promise<string> {
        const script  = `INSERT INTO application_user (username, password) VALUES ($1, $2) RETURNING uuid`;
        const values = [user.username, user.password];

        const { rows } = await db.query<{ uuid: string }>(script, values);

        const [newUser] = rows;
        
        return newUser.uuid;
    }

    async updateUser(user: User): Promise<User> {
        const script  = `UPDATE application_user SET username = $1, password = $2 WHERE uuid = $3 RETURNING uuid`;
        const values = [user.username, user.password, user.uuid];

        const { rows } = await db.query<User>(script, values);

        return rows[0] || null;
    }

    async deleteUser(unid: string): Promise<void> {
        const script  = `DELETE FROM application_user WHERE uuid = $1`;
        const values = [unid];

        await db.query(script, values);
    }
}


export default new UserRepository();
