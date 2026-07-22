import { Router } from "express";
import prisma from "../../prisma/prisma.js";

const router = Router();


/**
 * GET /api/clients
 */
router.get("/", async (req, res) => {

  try {

    const clients = await prisma.client.findMany({
      orderBy:{
        date_creation:"desc"
      }
    });


    res.json(clients);


  } catch(error) {

    console.error(error);

    res.status(500).json({
      message:"Erreur récupération clients"
    });

  }

});




/**
 * POST /api/clients
 */
router.post("/", async (req, res) => {

  try {


    console.log(
      "CLIENT RECU :",
      req.body
    );


    const client = await prisma.client.create({

      data: {

        entreprise: req.body.entreprise,

        nom: req.body.nom,

        prenom: req.body.prenom,

        telephone: req.body.telephone || null,

        email: req.body.email || null,

        secteur: req.body.secteur || null,

        commentaires: req.body.commentaires || null

      }

    });



    res.status(201).json({

      success:true,

      message:"Client créé",

      client

    });



  } catch(error) {


    console.error(
      "ERREUR CREATION CLIENT :",
      error
    );


    res.status(500).json({

      success:false,

      message:"Erreur création client"

    });


  }

});




/**
 * GET /api/clients/:id
 */
router.get("/:id", async(req,res)=>{

  try {

    const client =
      await prisma.client.findUnique({

        where:{
          id:req.params.id
        }

      });


    res.json(client);


  } catch(error){

    res.status(500).json({
      message:"Erreur serveur"
    });

  }

});

// Modifier un client
router.put("/:id", async (req, res) => {

  try {

    const client = await prisma.client.update({

      where:{
        id:req.params.id
      },

      data:req.body

    });


    res.json(client);


} catch(error){

  console.log(error);

  res.status(500).json({
    message: error instanceof Error 
      ? error.message 
      : "Erreur serveur"
  });

}

});


// Supprimer un client
router.delete("/:id", async (req, res) => {

  try {

    const client = await prisma.client.delete({

      where: {
        id: req.params.id
      }

    });


    res.json({
      success: true,
      message: "Client supprimé",
      client
    });


  } catch(error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: error instanceof Error
        ? error.message
        : "Erreur suppression client"

    });

  }

});
export default router;