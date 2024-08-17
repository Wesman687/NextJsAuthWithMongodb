import { NextResponse } from "next/server"
import { createUser } from "../../queries/users"
import { dbConnect } from '../../lib/mongo'
import bcrypt from 'bcryptjs'

export const POST = async (request) => {
    const { name, email, password } = await request.json()
    console.log(name, email, password)
    // Create a db connection
    await dbConnect()
    //encrypt the password
    const hashedPassword = await bcrypt.hash(password, 5)

    //form a db payload
    const newUser = {
        name, password: hashedPassword, email
    }
    console.log(newUser)
    //update the db
    try {
        await createUser(newUser)
    } catch (e) {
        return new NextResponse(e.message, {
            status: 500,
        })        
    }

    return new NextResponse("User has been created", {
        status: 201,
    })
}