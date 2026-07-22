
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";


export default function Login() {


  const navigate = useNavigate();


  const auth = useContext(AuthContext);


  if (!auth) {
    throw new Error("AuthContext non disponible");
  }


  const { login } = auth;



  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");





  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();


    setError("");

    setLoading(true);



    try {


      await login(
        {
          email,
          password
        },
        rememberMe
      );


      navigate("/dashboard");



    } catch (err:any) {


      setError(
        err.response?.data?.message ||
        "Email ou mot de passe incorrect"
      );


    } finally {

      setLoading(false);

    }

  }





  return (

    <div className="
      min-h-screen
      w-full
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-blue-900
      via-blue-700
      to-indigo-900
      px-4
    ">



      <div className="
        w-full
        max-w-md
        bg-white
        rounded-3xl
        shadow-2xl
        p-8
      ">



        {/* Logo */}

        <div className="
          flex
          justify-center
          mb-6
        ">


          


        </div>





        {/* Titre */}

        <div className="
          text-center
          mb-8
        ">


          <h1 className="
            text-3xl
            font-bold
            text-gray-800
          ">

            MS Consulting CRM

          </h1>



          <p className="
            text-gray-500
            mt-2
          ">

            Connectez-vous à votre espace professionnel

          </p>



        </div>






        {
          error && (

            <div className="
              bg-red-100
              text-red-700
              p-3
              rounded-xl
              mb-5
              text-sm
            ">

              {error}

            </div>

          )
        }







        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >




          {/* Email */}

          <div>


            <label className="
              block
              text-sm
              font-medium
              text-gray-700
            ">

              Email

            </label>



            <input

              type="email"

              value={email}

              onChange={
                e => setEmail(e.target.value)
              }

              placeholder="admin@crm.com"

              className="
                w-full
                mt-2
                p-3
                border
                rounded-xl
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "

              required

            />


          </div>







          {/* Password */}

          <div>


            <label className="
              block
              text-sm
              font-medium
              text-gray-700
            ">

              Mot de passe

            </label>



            <input

              type="password"

              value={password}

              onChange={
                e => setPassword(e.target.value)
              }

              placeholder="••••••••"

              className="
                w-full
                mt-2
                p-3
                border
                rounded-xl
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "

              required

            />


          </div>








          {/* Options */}

          <div className="
            flex
            justify-between
            items-center
          ">



            <label className="
              flex
              items-center
              gap-2
              text-sm
              text-gray-600
            ">



              <input

                type="checkbox"

                checked={rememberMe}

                onChange={
                  e => setRememberMe(e.target.checked)
                }

              />



              Se souvenir de moi



            </label>





            <a

              href="/forgot-password"

              className="
                text-sm
                text-blue-600
                hover:underline
              "

            >

              Mot de passe oublié ?

            </a>



          </div>








          {/* Bouton */}

          <button

            type="submit"

            disabled={loading}

            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-semibold
              p-3
              rounded-xl
              transition
              disabled:opacity-50
            "

          >


            {
              loading
              ?
              "Connexion..."
              :
              "Se connecter"
            }



          </button>




        </form>







        <div className="
          text-center
          mt-8
          text-sm
          text-gray-400
        ">

          © 2026 MS Consulting CRM

        </div>




      </div>



    </div>

  );

}
