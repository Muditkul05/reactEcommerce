import Express from "express";
import bcrypt from 'bcrypt';
import db from '../config/db.js';
import jwt from 'jsonwebtoken';

const userRouter = Express.Router()

userRouter.post("/register",async (req,res)=>{
    const {name , email ,password} = req.body;
    console.log('Data received',req.body);
    try{
        const hashedPassword = await bcrypt.hash(password,10);
        const query = 'INSERT INTO users (name , email , password_hash) VALUES (? , ? , ?)';
        await db.query(query,[name , email , hashedPassword]);
        res.status(201).json({ message: 'Registration successfull'});
    }catch(error){
        console.error('Database error',error);
    }

});
userRouter.post('/login', async(req,res)=>{
    const {email , password} = req.body;
    console.log('Data received', req.body);
    try{
        const query = 'SELECT * FROM users WHERE email = ?';
        const [rows] = await db.query(query,[email]);
        if(rows.length == 0){
            return res.status(401).json({message: 'Invalid Email or Password'});
        }
        const user = rows[0];
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);
        
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid Email or Password' });
        }
        const token = jwt.sign(
            {userID: user.id},
            'chess',
            {expiresIn: '1h'}
        );
        res.status(200).json({
            message: 'Login successful',
            token,
            user:{
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    }catch (error) {
        console.error('Server error during login', error);
        res.status(500).json({ message: 'Server error during login' });
    }
})


export default userRouter