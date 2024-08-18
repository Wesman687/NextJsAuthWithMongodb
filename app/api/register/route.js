import { NextResponse } from "next/server"
import { dbConnect } from '../../lib/mongo'
import bcrypt from 'bcryptjs'
import { sendEmail } from "../../utils/mailhelper"
import { User } from "../../model/user-model"

export const POST = async (request) => {
    const { name, email, password } = await request.json()
    // Create a db connection
    await dbConnect()
    //encrypt the password
    const hashedPassword = await bcrypt.hash(password, 5)
    //form a db payload
    const newUser = {
        name, password: hashedPassword, email
    }
    //update the db
    let savedUser
    try {
        savedUser = await User.create(newUser)
    } catch (e) {
        return new NextResponse(e.message, {
            status: 500,
        })        
    }
    sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

    return new NextResponse("User has been created", {
        status: 201,
    })
}