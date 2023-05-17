import { SignInButton, SignUpButton } from "@clerk/nextjs";

function AuthButtons() {
  return (<>
    <div className='flex'>
        <SignInButton redirectUrl="/dashboard">
          <button className='btn w-[65%] mr-auto'>
            Login
          </button>
        </SignInButton>
        <SignUpButton redirectUrl="/dashboard">
          <button className='btn btn-solid w-[25%]'>
            Signup
          </button>  
        </SignUpButton>
      </div>
  </>)
}

export default AuthButtons;