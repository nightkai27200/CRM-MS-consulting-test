import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {prisma} from "../config/database.js";


export async function login(
email:string,
password:string
){


const user=
await prisma.user.findUnique({
where:{email}
});


if(!user)
throw Error("Utilisateur inconnu");



const valid=
await bcrypt.compare(
password,
user.mot_de_passe
);



if(!valid)
throw Error("Mot de passe incorrect");



const token=
jwt.sign(
{
id:user.id,
role:user.role
},
process.env.JWT_SECRET!,
{
expiresIn:"15m"
}
);



return {
token,
user
};


}