import React,{useState} from "react";
import { signup } from "../actions/signupAction";
import { useSelector, useDispatch } from "react-redux";
const Signup = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    username: "", email: "",dob:new Date(),  password: "", confpassword: ""
  })
    
  return (
<div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="username"
            placeholder="Username"
            onChange={(x)=>setUser({...user, username:x.target.value})}
          />


          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            onChange={(x)=>setUser({...user, email:x.target.value})}

          />



          <input
            type="date"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="DateOfBirth"
            placeholder="DOB"
            onChange={(x)=>setUser({...user, dob:x.target.value})}

          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            onChange={(x)=>setUser({...user, password:x.target.value})}

          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
            onChange={(x)=>setUser({...user, confpassword:x.target.value})}

          />


          <button
            onClick={() => {dispatch(signup(user));}}
            className="w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
          >
            Create Account
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <a
            className="no-underline border-b border-blue text-blue"
            href="../login/"
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
    )
}
export default Signup; 