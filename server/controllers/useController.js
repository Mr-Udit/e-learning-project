import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"
import { generateToken } from "../utils/generateToken.js";

export const register = async (req,resp) =>{
    try {
        const {name, email, password} = req.body;
        if (!name || !email || !password) {
            return resp.status(400).json({
                success:false,
                message:"all fields are requried",
            });
        }
        const user = await User.findOne({email});
        if(user){
            return resp.status(400).json({
                success:false,
                message:"User already exists"
            })
        }
        const hashedPasswrod = await bcrypt.hash(password, 10);
        await User.create({
            name,
            email,
            password:hashedPasswrod,
        });
        return resp.status(201).json({
            success:true,
            message:"account created successfullay"
        })
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            success:false,
            message:"failed to register"
        })
    }
}

export const login = async (req,resp) =>{
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return resp.status(400).json({
                success:false,
                message:"all fields are requried",
            });
        }
        const user = await User.findOne({email});
        if(!user){
            return resp.status(400).json({
                success:false,
                message:"incorrect email or password"
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return resp.status(400).json({
                success:false,
                message:"incorrect email or password"
            })
        }
        generateToken(resp,user,`welcome back${user.name}`)
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            success:false,
            message:"failed to register"
        })
    }
}