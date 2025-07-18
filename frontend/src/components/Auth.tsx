import { useState, type ChangeEvent} from "react";
import { Link,  useNavigate } from "react-router-dom"
import type { SignupInput } from "@nasirnadaf/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config"

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate()
  const [ postInputs ,setPostInputs] = useState<SignupInput>({
    name:"",
    username:"",
    password:""
  });

  async function sendRequest(){
    try{
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup"? "signup" : "signin"}`,postInputs)
      const jwt = response.data;
      localStorage.setItem("token",jwt)
      navigate("/blogs")
    }catch(e){
      alert("Error while Signing up")
    }
    
  }
  return (
    
    <div className=" h-screen flex  justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10 ">
              <div className="text-4xl font-extrabold">
                Create an account
              </div>
              <div className="text-slate-400">
                {type === "signin"? "Don't have an Account?" : "Already have an account?"}
                <Link className="pl-2 underline" to={type==="signin"? "/signup" : "/signin"}>{type === "signin" ? "Sign up":"Sign in"}</Link> 
              </div>
          </div>
          <div >
              {type ==="signup"? <LabelledInput label="Name" placeholder="Enter name..." onChange={(e)=>{
              setPostInputs(({
                ...postInputs,
                name: e.target.value
              }))
            }} /> : null}
            <LabelledInput label="Username" placeholder="Enter username..." onChange={(e)=>{
              setPostInputs(({
                ...postInputs,
                username: e.target.value
              }))
            }} />
            <LabelledInput label="Password" type={"password"} placeholder="Enter Password..." onChange={(e)=>{
              setPostInputs(({
                ...postInputs,
                password: e.target.value
              }))
            }} />
            <button onClick={sendRequest} type="button" className="w-full mt-4 cursor-pointer text-white bg-zinc-800 hover:bg-zinc-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup"? "Sign up":"Sign in"}</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};
interface LabelledInputType{
  label:string;
  placeholder:string;
  onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
  type?:string
}

function LabelledInput({label, placeholder, onChange , type}: LabelledInputType){
  return(<div>
    <label className="block mb-2 text-xl font-semibold  text-gray-900">{label}</label>
    <input onChange={onChange} type={ type ||"text"} id="username" className="bg-gray-100 order-gray-500 text-gray-900 text-sm rounded-lgblock w-full p-2.5 " placeholder={placeholder} required/>
  </div>);
}
export default Auth;
