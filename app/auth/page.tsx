import { SignInButton } from "@clerk/nextjs";

function Login() {
  return (<>
    <div className='h-full'>
      <SignInButton />
    </div>
  </>)
}

export default Login;