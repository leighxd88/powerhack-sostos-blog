import FormPost from "../components/FormPost"
import Header from "../components/Header"

const Post = ()=>{
    return(
        <div>
            <Header/>
            <main className="px-4 gap-3 flex-col md:px-12 lg:px-24 justify-center overflow-x-hidden w-screen items-center flex mt-20">
                <div>
                <h1 className="text-blue-500 font-bold md:text-xl text-lg">Create your blog Here</h1>
                <p>Kindly enter the details below</p>
                </div>
                <FormPost/>
            </main>
        </div>
    )
}

export default Post