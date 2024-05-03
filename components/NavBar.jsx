import Link from "next/link"
import NavButton from "./NavButton"

function NavBar() {
  return(
    <>
      <nav className="flex items-center justify-start relative h-12 border-b-2 border-b-teal-600">
        <img className="h-12 ml-10" src="./logo.png" alt="logo insti" />
        <ul className=" w-full flex flex-row justify-center font-medium text-sm ">
            <NavButton label="Centre" opt={['Prsentació', 'Estructura organitzativa', 'Documents del centre', 'Contacte']}></NavButton>
            <NavButton label="Alumnat" opt={['ESO', 'Batxillerat', 'Formació Professional']}></NavButton>
            <NavButton label="Families" opt={["Calendari escolarr", 'Llibres de text', 'Pagament', 'Plataforma alexia', 'Família i Escola', "Bloc de l'AMPA", 'Quota de materials i serveis', 'Ordinadors portatils', 'Activitats nàutiques']}></NavButton>
            <NavButton label="Serveis" opt={['Secretaria', 'Biblioteca', 'Seguretat i salut', "Consergeria"]}></NavButton>
        </ul>
        <ul className="flex flex-row gap-5 m-9 items-center ">

          <li className=" flex justify-center items-center rounded-full hover:cursor-pointer p-2 w-9 "><img width="32" height="32" src="https://img.icons8.com/ios-filled/32/calendar.png" alt="knowledge-sharing"/></li>
          
          <li className="flex justify-center items-center rounded-full hover:cursor-pointer p-2 w-9 "><img width="32" height="32" src="https://img.icons8.com/ios-filled/32/inbox.png" alt="inbox"/></li>     
            
          <Link href='/login' className="flex justify-center items-center rounded-full hover:cursor-pointer p-2 w-9 " ><img width="32" height="32" src="https://img.icons8.com/puffy-filled/32/user.png" alt="user"/></Link>
 
        </ul>
      </nav>
    </>
  
  )
}
export default NavBar