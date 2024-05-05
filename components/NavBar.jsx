'use client'
import Link from "next/link"
import NavButton from "./NavButton"
import { logo } from "@/public/logo.png"

export default function NavBar() {
  return(
    <>
      <nav className="flex items-center justify-start relative h-12 border-b-2 border-b-teal-600">
        <img className="h-11 ml-10" src="https://educaciodigital.cat/iesb7/moodle/pluginfile.php/1/theme_xtecboost/logo/0/m_iconab7.jpg"/>
        <ul className=" w-full flex flex-row justify-center font-medium text-sm ">
            <NavButton label="Centre" opt={['Presentació', 'Estructura organitzativa', 'Documents del centre', 'Contacte']}></NavButton>
            <NavButton label="Alumnat" opt={['ESO', 'Batxillerat', 'Formació Professional']}></NavButton>
            <NavButton label="Families" opt={["Calendari escolar", 'Llibres de text', 'Pagament', 'Plataforma alexia', 'Família i Escola', "Bloc de l'AMPA", 'Quota de materials i serveis', 'Ordinadors portàtils', 'Activitats nàutiques']}></NavButton>
            <NavButton label="Serveis" opt={['Secretaria', 'Biblioteca', 'Seguretat i salut', "Consergeria"]}></NavButton>
        </ul>
        <ul className="flex flex-row gap-5 m-9 items-center ">
        
          <li className=" flex justify-center items-center rounded-full hover:cursor-pointer p-2 w-9 "><img width="32" height="32" src="https://img.icons8.com/ios-filled/32/calendar.png" alt="knowledge-sharing"/></li>
          
          <li className=" flex justify-center items-center rounded-full hover:cursor-pointer p-2 w-9 "><img width="32" height="32" src="https://img.icons8.com/ios-filled/32/inbox.png" alt="inbox"/></li>     
            
          <Link href='pages/login' className="flex justify-center items-center rounded-full hover:cursor-pointer p-2 w-9 " ><img width="32" height="32" src="https://img.icons8.com/puffy-filled/32/user.png" alt="user"/></Link>
 
        </ul>
      </nav>
    </>
  
  )
}