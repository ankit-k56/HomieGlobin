import { NextResponse } from "next/server"
import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()

interface User{
    name: String,
    email: String,
    password:String,
    blood_group: String
}

export const POST = async(req: Request, res: Response)=>{
    // const userId = req.params.id
    const { email, password}:any = req.body
    try{
        // const user = await prisma.user.findUnique({
        //     where:{
        //         email,
        //     }
        // })
        // prisma.User
        const user = await prisma.user.findMany()
        console.log(user)
        // if(user?.password!= password) return NextResponse.json({error:"password is incorrect"}, {status:401})
        return NextResponse.json({message:"Signed in Successfully",user},{status:500})
    } catch(err){
        return NextResponse.json({error:err},{status:500})
    }

}