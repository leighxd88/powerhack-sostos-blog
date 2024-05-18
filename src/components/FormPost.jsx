import { useState } from "react";
import { supabase } from "../lib/supabase";
import run from "../lib/gemini";

const FormPost = ()=>{
    const [formData, setFormData] = useState({
        title: "",
        content: "",
      });
      const [error, setError]= useState(false)
      const [loading, setLoading] = useState(false)
      const handleChange = (event)=>{
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
          });
          console.log('my data', formData)
      }
      const handleSubmit = async(e)=>{
        e.preventDefault()
        setLoading(true)
        console.log(loading)
        const result = await run(`title: ${formData.title}, content: ${formData.content}`);
        console.log(result);
    
        try{
            const { data, error } = await supabase.from('posts')
            .insert(formData).single()
            if(error){
                setError(error)
                console.log(error)
            }
        }catch(error){
            console.log(error)
            alert(error.message);
        }finally{
            setLoading(false)
        }
    }
    
 return (
    <div className="w-full p-4 md:p-12 border-grey-500 border-2 rounded-md md:rounded-xl">
        <form >
            <div className="flex flex-col gap-0">
            <label htmlFor="title">Blog Title:</label>
            <input onChange={handleChange} type="text" placeholder="e,g My blog" name="title" className="bg-blue-100 rounded-md outline-none p-4" />
            </div>
            <div className="flex flex-col gap-0">
            <label htmlFor="title">Blog Content:</label>
            <textarea onChange={handleChange} rows={10} type="text" placeholder="Your content goes here..." name="content" className="bg-blue-100 rounded-md outline-none p-4" />
            </div>
            <div className="gap-2 flex flex-col md:flex-row justify-evenly p-3">
                <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white md:p-3 p-2 rounded-md w-full md:max-w-[250px] font-semibold">Post your blog</button>
                <button type="reset" className="bg-gray-300 md:p-3 p-2 rounded-md w-full md:max-w-[150px] font-semibold">Reset</button>
            </div>
        </form>
    </div>
 )
}
export default FormPost