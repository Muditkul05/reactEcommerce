import Express from 'express';
import db from '../config/db.js';

const productsRouter = Express.Router();
productsRouter.get('/carousel', async(req , res) => {
    try{
        const query = 'SELECT * FROM carousel';
        const [rows] = await db.query(query);
            res.status(200).json(rows);

    }catch(error){
        console.error('Error:', error)
        res.status(500).json({message: 'Server  error fetching banners'})
    }
})

productsRouter.get('/shoes',async(req,res)=>{
    try{
        const query = "SELECT * FROM products WHERE categories_id = 1";
        const [rows] = await db.query(query);
        res.status(200).json(rows);
    }catch(error){
        console.error('Error:',error)
        res.status(500).json({message: 'Server  error fetching shoes'})
    }
})

productsRouter.get('/electronics', async(req,res)=>{
    try{
        const query ='SELECT * FROM products WHERE categories_id = 2';
        const [rows] = await db.query(query);
        res.status(200).json(rows);
    }catch(error){
        console.error('Error:',error)
        res.status(500).json({message: 'Server errror fetching electronics'})
    }
})

productsRouter.get('/clothes', async(req,res)=>{
    try{
        const query ='SELECT * FROM products WHERE categories_id = 3';
        const [rows] = await db.query(query);
        res.status(200).json(rows);
    }catch(error){
        console.error('Error:',error)
        res.status(500).json({message: 'Server errror fetching clothes'})
    }
})

productsRouter.get('/groceries', async(req,res)=>{
    try{
        const query ='SELECT * FROM products WHERE categories_id = 4';
        const [rows] = await db.query(query);
        res.status(200).json(rows);
    }catch(error){
        console.error('Error:',error)
        res.status(500).json({message: 'Server errror fetching groceries'})
    }
})
export default productsRouter;