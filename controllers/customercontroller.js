import { Customer } from '../models/customer';
import { Sequelize, where } from 'sequelize'

export const CustomerCreate= async (req,res)=>{ 
    const email=req.body.email;
    const phone= req.body.phone;
    const name = req.body.name;
    const password= req.body.password;
    const token= req.body.token;

    const create= await Customer.Create({email:email,phone:phone,name:name,password:password,token:token})
    res.status(200).json({data:create})
};

export const update = async(req,res)=>{
    const id = req.body.id;

    const email=req.body.email;
    const phone= req.body.phone;
    const name = req.body.name;
    const password= req.body.password;
    const token= req.body.token;

    const create= await User.update({email:email,phone:phone,name:name,password:password,token:token},
                                    {where:{id:id}})
    res.status(200).json({data:create})
}


export const getOne= async(req,res)=>{
    
    const  id= req.body.id
    const data = await User.findOne({where:{id:id}})
    res.status(200).json({data:data})
}

export const getAll = async (req,res)=>{
    const data = await User.findAll()
    res.status(200).json({data:data})
}