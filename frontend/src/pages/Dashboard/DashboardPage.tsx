import type { ReactNode } from "react";

import {
  Users,
  Building2,
  BriefcaseBusiness,
  Euro,
  TrendingUp
} from "lucide-react";



export default function DashboardPage() {


return (

<div className="space-y-8">



{/* TITRE */}

<div>

<h1 className="
text-3xl
font-bold
text-gray-800
">
Tableau de bord
</h1>


<p className="
text-gray-500
mt-2
">
Vue globale de votre activité commerciale
</p>


</div>





{/* CARTES KPI */}

<div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
gap-6
">


<Card
title="Clients"
value="248"
icon={<Users />}
evolution="+12%"
/>


<Card
title="Prospects"
value="586"
icon={<Building2 />}
evolution="+8%"
/>


<Card
title="Opportunités"
value="42"
icon={<BriefcaseBusiness />}
evolution="+18%"
/>


<Card
title="Chiffre d'affaires"
value="124 500 €"
icon={<Euro />}
evolution="+24%"
/>



</div>





{/* PIPELINE */}

<div className="
bg-white
rounded-2xl
shadow
p-6
">


<div className="
flex
justify-between
mb-6
">


<h2 className="
text-xl
font-bold
">
Pipeline commercial
</h2>


<TrendingUp
className="text-green-600"
/>


</div>




<div className="
grid
grid-cols-1
md:grid-cols-4
gap-5
">


<Pipeline
title="Nouveaux prospects"
value="85"
/>


<Pipeline
title="Qualification"
value="42"
/>


<Pipeline
title="Propositions"
value="18"
/>


<Pipeline
title="Signatures"
value="9"
/>


</div>


</div>





</div>


);

}







function Card({

title,
value,
icon,
evolution

}:{

title:string;
value:string;
icon:ReactNode;
evolution:string;

}) {


return (

<div className="
bg-white
rounded-2xl
shadow
p-6
flex
justify-between
items-center
">


<div>


<p className="
text-gray-500
">
{title}
</p>


<h3 className="
text-3xl
font-bold
mt-2
">
{value}
</h3>


<p className="
text-green-600
text-sm
mt-2
">
{evolution}
</p>


</div>



<div className="
bg-blue-100
text-blue-700
p-4
rounded-xl
">

{icon}

</div>



</div>

);

}







function Pipeline({

title,
value

}:{

title:string;
value:string;

}){


return (

<div className="
bg-gray-50
border
rounded-xl
p-5
">


<p className="
text-gray-500
">
{title}
</p>


<p className="
text-3xl
font-bold
mt-2
">
{value}
</p>


</div>


);


}