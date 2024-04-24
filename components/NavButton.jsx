

export default function NavButton ({ label, opt }) {
  return (

      <li  className="p-4 lg:px-8 group relative flex items-center space-x-1 ">
            <a className="text-slate-800 hover:text-slate-900 " href="#">{label}</a>
            <ul className="origin-top-right absolute top-full left-1/2 -translate-x-1/2 w-fit border-slate-200 p-2 rounded-lg shadow-xl hidden group-hover:block"
                >
              {opt.map(e => {
                return(
                  <li key={e}>
                    <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
                        <span className="whitespace-nowrap">{e}</span>
                    </a>
                </li>
                )
              })}
            </ul>
            
      </li>
  )
}

