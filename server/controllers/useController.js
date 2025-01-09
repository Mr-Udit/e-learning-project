import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"
import { generateToken } from "../utils/generateToken.js";
 // Get the current date and time
 const now = new Date();
 const year = now.getFullYear();
 const month = now.getMonth() + 1;
 const day = now.getDate();
 const hours = now.getHours();
 const minutes = now.getMinutes();
 const seconds = now.getSeconds();

export const register = async (req, resp) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return resp.status(400).json({
                success: false,
                message: "all fields are requried",
            });
        }
        const user = await User.findOne({ email });
        if (user) {
            return resp.status(400).json({
                success: false,
                message: "User already exists"
            })
        }
        const hashedPasswrod = await bcrypt.hash(password, 10);
        await User.create({
            name,
            email,
            password: hashedPasswrod,
        });
        console.log(`${name} registered at ${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
        return resp.status(201).json({
            success: true,
            message: "account created successfullay"
        })
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            success: false,
            message: "failed to register"
        })
    }
}

export const login = async (req, resp) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return resp.status(400).json({
                success: false,
                message: "all fields are requried",
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return resp.status(400).json({
                success: false,
                message: "incorrect email or password"
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return resp.status(400).json({
                success: false,
                message: "incorrect email or password"
            })
        }
       

        generateToken(resp, user, `welcome back ${user.name}`)
        console.log(`${user.name} logged in at ${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            success: false,
            message: "failed to register"
        })
    }
}