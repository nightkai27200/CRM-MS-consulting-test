import type {Request,Response} from "express";
import bcrypt from "bcrypt";
import {prisma} from "../config/database.js";


export async function register(
req:Request,
res:Response
){


const {
nom,
prenom,
email,
password,
role
}=req.body;



const hash=
await bcrypt.hash(password,10);



const user=
await prisma.user.create({

data:{

nom,
prenom,
email,

mot_de_passe:hash,

role

}

})


res.json(user)


}