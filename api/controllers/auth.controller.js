import bcrypt from 'bcrypt'
import prisma from '../lib/prisma.js'

export const register = async(req , res)=> {
    //db operations
    const { username , email , password} = req.body
   
    //Hash the Password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)

    //Create a new User
    const newUser = await prisma.user.create({
       data:{
            username,
            email,
            password:hashedPassword,
       },
    })
        console.log(newUser);
        res.status(201).json({message : "User created successfully!"})
};


export const login = async(req , res)=> {
  const { username , password } = req.body;

  try {
    //Check if user is exist
    const user = await prisma.user.findUnique({
        where:{username}
    })

    if(!user){
        return res.status(401).json({message : "Invalid Credentials!"})
    }

    
    //Check the user password is correct
    const isPasswordCorrect = await bcrypt.compare(password , user.password)

    if(!isPasswordCorrect){
        return res.status(401).json({message : "Invalid Credentials!"})
    }

    //Generate a cookie Token and Send it to user
    res.setHeader("Set-Cookie","test=" + "myValue").json("Login Success!")
    
  } catch (error) {
    console.log(first)
    res.status(500).json({message: "Failed to Login"})
  }
}

export const logout = (req , res)=> {
    //db operations
    console.log("logout endpoints")
}