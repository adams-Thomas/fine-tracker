import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

interface Props {
  isSignedIn: boolean
}

function AuthButtons(props: Props) {
  const { isSignedIn } = props;
  
  return (<>
    <div className='flex'>
      {isSignedIn ? <button className="btn w-full">
        <Link href={'/dashboard'}>
          Go To Dashboard
        </Link>
      </button> : <>
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
      </>}
    </div>
  </>)
}

export default AuthButtons;
