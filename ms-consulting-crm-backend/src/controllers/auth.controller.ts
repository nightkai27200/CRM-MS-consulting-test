


import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import prisma from "../../prisma/prisma.js";

export class AuthController {

  static async login(
    req: Request,
    res: Response
  ) {
console.log("BODY RECU :", req.body);
    const {
      email,
      password
    } = req.body;


    const user =
      await prisma.user.findUnique({
        where: {
          email
        }
      });


    if (!user) {
      return res.status(401).json({
        message: "Utilisateur inconnu"
      });
    }


    if (password !== user.mot_de_passe) {
      return res.status(401).json({
        message: "Mot de passe incorrect"
      });
    }


    const token =
      jwt.sign(
        {
          id: user.id,
          role: user.role
        },
        process.env.JWT_SECRET!,
        {
          expiresIn: "1d"
        }
      );


    res.json({
      user: {
        id: user.id,
        email: user.email
      },
      token
    });

  }

}