import {Card, CardContent,Typography,
  Chip,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";

import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from "@mui/material";
import api from "../../api/api";


interface Client {

  id: string;

  entreprise: string;

  nom: string;

  prenom: string;

  telephone?: string;

  email?: string;

  secteur?: string;

  commentaires?: string;

  statut?: string;

}



export default function ClientCard(){


  const [clients, setClients] =
    useState<Client[]>([]);


const [editId, setEditId] = useState<string | null>(null);
  const [open, setOpen] =
    useState(false);
const [deleteId, setDeleteId] = useState<string | null>(null);
const [confirmDelete, setConfirmDelete] = useState(false);
const [search, setSearch] = useState("");


  const [form, setForm] = useState({

    entreprise:"",
    nom:"",
    prenom:"",
    telephone:"",
    email:"",
    secteur:"",
    commentaires:"",
    statut:"Client actif"

  });




  const getClients = async()=>{

    try{

      const response =
        await api.get("/api/clients");


      setClients(response.data);


    }catch(error){

      console.error(
        "Erreur récupération clients",
        error
      );

    }

  };




  useEffect(()=>{

    getClients();

  },[]);




  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  )=>{

    setForm({

      ...form,

      [e.target.name]:
        e.target.value

    });

  };





  const ajouterClient = async()=>{


    try{


      await api.post(
        "/api/clients",
        form
      );



      setOpen(false);



      setForm({

        entreprise:"",
        nom:"",
        prenom:"",
        telephone:"",
        email:"",
        secteur:"",
        commentaires:"",
        statut:"Client actif"

      });



      getClients();



    }catch(error){


      console.error(
        "Erreur ajout client",
        error
      );


    }


  };


      const ouvrirModification = (client: Client) => {

  setEditId(client.id);

  setForm({

    entreprise: client.entreprise,
    nom: client.nom,
    prenom: client.prenom,
    telephone: client.telephone || "",
    email: client.email || "",
    secteur: client.secteur || "",
    commentaires: client.commentaires || "",
    statut: client.statut || "ACTIF"

  });

  setOpen(true);

};

const modifierClient = async()=>{

  try{

    await api.put(
      `/api/clients/${editId}`,
      form
    );


    setOpen(false);

    setEditId(null);


    getClients();


  }catch(error){

    console.error(
      "Erreur modification client",
      error
    );

  }

};

const supprimerClient = async()=>{

  if (!deleteId) {
    console.error("Aucun client sélectionné");
    return;
  }

  try{

    console.log("Suppression ID :", deleteId);

    await api.delete(
      `/api/clients/${deleteId}`
    );

    setConfirmDelete(false);
    setDeleteId(null);

    getClients();


  }catch(error){

    console.error(
      "Erreur suppression client",
      error
    );

  }

};


const clientsFiltres = clients.filter((client)=>{

  const texte = search.toLowerCase();


  return (

    client.nom.toLowerCase().includes(texte)

    ||

    client.prenom.toLowerCase().includes(texte)

    ||

    client.entreprise.toLowerCase().includes(texte)

    ||

    (client.email || "").toLowerCase().includes(texte)

    ||

    (client.telephone || "").includes(texte)

  );

});



  return (

    <>


      <Button

        variant="contained"

        sx={{
          mb:3
        }}

        onClick={()=>setOpen(true)}

      >

        Ajouter un client

      </Button>

        <TextField

  fullWidth

  label="Rechercher un client"

  value={search}

  onChange={(e)=>setSearch(e.target.value)}

  sx={{
    mb:3
  }}

/>



      <Dialog

        open={open}

        onClose={()=>setOpen(false)}

      >


        <DialogTitle>
  {editId ? "Modifier client" : "Nouveau client"}
</DialogTitle>




        <DialogContent>

          <FormControl
  fullWidth
  margin="dense"
>

  <InputLabel>
    Statut
  </InputLabel>


  <Select

    name="statut"

    value={form.statut}

    label="Statut"

    onChange={(e)=>setForm({

      ...form,

      statut:e.target.value

    })}

  >

    <MenuItem value="Prospect">
      Prospect
    </MenuItem>


    <MenuItem value="Client actif">
      Client actif
    </MenuItem>


    <MenuItem value="Client inactif">
      Client inactif
    </MenuItem>


    <MenuItem value="Ancien client">
      Ancien client
    </MenuItem>


  </Select>


</FormControl>





          {

            [

              "entreprise",
              "nom",
              "prenom",
              "telephone",
              "email",
              "secteur",
              "commentaires"

            ].map((field)=>(


              <TextField

                key={field}

                margin="dense"

                fullWidth

                label={field}

                name={field}

                value={
                  form[field as keyof typeof form]
                }

                onChange={handleChange}

              />


            ))

          }



        </DialogContent>





        <DialogActions>


          <Button

            onClick={()=>setOpen(false)}

          >

            Annuler

          </Button>




          <Button
            variant="contained"
            onClick={
            editId ? modifierClient : ajouterClient
            }
>
            {editId ? "Modifier" : "Enregistrer"}
          </Button>

            
           




        </DialogActions>



      </Dialog>


<Dialog
  open={confirmDelete}
  onClose={()=>setConfirmDelete(false)}
>

  <DialogTitle>
    Supprimer ce client ?
  </DialogTitle>


  <DialogContent>

    Cette action est définitive.

  </DialogContent>


  <DialogActions>


    <Button
      onClick={()=>setConfirmDelete(false)}
    >
      Annuler
    </Button>


    <Button
      color="error"
      variant="contained"
      onClick={supprimerClient}
    >
      Supprimer
    </Button>

    
  </DialogActions>


</Dialog>




      <Grid

        container

        spacing={3}

      >



        {

          clientsFiltres.map((client)=>(


            <Grid

              key={client.id}

              size={{
                xs:12,
                md:6
              }}

            >


              <Card>


                <CardContent>


                  <Typography variant="h5">

                    {client.prenom} {client.nom}

                  </Typography>



                  <Typography>

                    Entreprise :
                    {client.entreprise}

                  </Typography>




                  <Typography>

                    Email :
                    {client.email}

                  </Typography>




                  <Typography>

                    Téléphone :
                    {client.telephone}

                  </Typography>




                  <Chip

  label={client.statut}

  color={
    client.statut === "Client actif"
      ? "success"
      :
    client.statut === "Prospect"
      ? "info"
      :
    client.statut === "Client inactif"
      ? "warning"
      :
      "default"
  }

  sx={{
    mt:2
  }}

/>

                      <Button
                        variant="outlined"
                        sx={{mt:2}}
                        onClick={()=>ouvrirModification(client)}
                      >
                      Modifier
                      </Button>

                      <Button
                        variant="outlined"
                        color="error"
                        sx={{mt:2, ml:2}}
                        onClick={()=>{

                        setDeleteId(client.id);
                        setConfirmDelete(true);

                        }}
                      >
                        Supprimer
                        </Button>

                </CardContent>



              </Card>



            </Grid>


          ))

        }



      </Grid>



    </>

  );


}