export default function AboutCard({ children, color}){
  return(
    <div className={`h-auto max-w-full rounded-lg ${color} text-xl flex flex-col justify-center items-center px-8 py-2 text-center gap-3`}>
      {children}
    </div>
  )
}