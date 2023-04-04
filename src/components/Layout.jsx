function Layout({children}){
    return(
        <div className="bg-slate-900  min-h-screen text-zinc-50 p-4">
            <div className="container mx-auto">
            {children}
            </div>
        </div>
    )
  }
  export default Layout;

//   background-image: linear-gradient(to bottom right, #C9E265, #086C8B);