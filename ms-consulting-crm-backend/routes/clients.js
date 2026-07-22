import express from "express";
import prisma from "../../prisma/prisma.js";

const router = express.Router();


// GET tous les clients
router.get("/", async (req, res) => {

    try {

        const clients = await prisma.client.findMany();

        res.json(clients);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

});


// POST ajouter un client
router.post("/", async (req, res) => {

    try {

        const client = await prisma.client.create({
            data: req.body
        });

        res.json(client);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

});


// PUT modifier un client
router.put("/:id", async (req, res) => {

    try {

        const client = await prisma.client.update({

            where: {
                id: req.params.id
            },

            data: req.body

        });


        res.json(client);


    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

});

// DELETE supprimer un client
router.delete("/:id", async (req, res) => {

    try {

        const client = await prisma.client.delete({

            where: {
                id: req.params.id
            }

        });


        res.json(client);


    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

});
export default router;