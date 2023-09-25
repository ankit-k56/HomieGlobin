import { NextResponse } from "next/server"
import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()
interface User{
    name: string,
    email: string,
    password:string
}

export const POST = async(req: Request, res: Response)=>{
    console.log(req)
    const {name, email, password}:User = await req.json()
    // console.log( {name, email, password, blood_group})
    try{
        const user = await prisma.user.create({
            data:{
                name,
                email,
                password             
            }
        })
        
        return NextResponse.json({message:"Signed up Successfully",user},{status:500})
    } catch(err){
        return NextResponse.json({error:err},{status:500})
    }

}