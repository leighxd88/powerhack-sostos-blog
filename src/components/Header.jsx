
const Header = ()=>{
    return(
        <div className="flex flex-row justify-between px-4 md:px-12 lg:px-24 fixed top-6 md:bg-10 w-screen bg-white">
            <h1 className=" text-2xl  text-blue-500 md:text-4xl  font-bold tracking-wide">Sostos blog
</h1>
                <ul className="justify-between flex flex-row gap-2 md:gap-4 lg:gap-6">
                    <li className="hover:text-blue-500 transition-all duration-150"><a href="/">Home</a></li>
                    <li  className="hover:text-blue-500 transition-all duration-150"><a href="#">About</a></li>
                    <li className="hover:text-blue-500 transition-all duration-150"><a href="/post">Post</a></li>
                </ul>
            
        </div>
    )
}

export default Header