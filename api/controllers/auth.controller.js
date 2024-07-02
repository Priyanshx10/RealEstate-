import bcrypt from 'bcrypt'

export const register = async(req , res)=> {
    //db operations
    const { username , email , password} = req.body
   
    //Hash the Password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)

    //Create a new User
}


export const login = (req , res)=> {
    //db operations
    console.log("login endpoints")
}

export const logout = (req , res)=> {
    //db operations
    console.log("logout endpoints")
}