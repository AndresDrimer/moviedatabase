import { signIn, signOut } from "next-auth/react";

function Login() {
  return (<>
    <div><button className="text-lg hover:scale-110" >login</button></div><div>
    <button className="text-lg hover:scale-110" >sign-up</button></div></>
  )
}

export default Login