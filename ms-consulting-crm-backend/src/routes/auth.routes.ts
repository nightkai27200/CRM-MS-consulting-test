import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.js";
import type { AuthRequest } from "../middleware/auth.js";
import prisma from "../../prisma/prisma.js";

const router = Router();


router.post(
  "/login",
  AuthController.login
);


router.get(
  "/me",
  authMiddleware,
  async (req: AuthRequest, res) => {

    const user =
      await prisma.user.findUnique({
        where: {
          id: req.user!.id
        }
      });


    if (!user) {
      return res.status(404).json({
        message: "Utilisateur introuvable"
      });
    }


    res.json({
  id: user.id,
  email: user.email,
  role: user.role
});

  }
);


export default router;