"use client"

import { useState } from "react";

export interface Props {
  title: string;
  message: string;
  interactive: any;
}

function InteractiveCard(props: Props) {
  const [hover, setHover] = useState(false);
  const { title, message, interactive } = props;

  return (
    <>
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} 
        className="
          bg-black-cyan 
          w-[20rem] 
          h-96 
          rounded-lg
          hover:shadow-3xl
          cursor-pointer
          p-5
          box-border
      ">
        {hover ? <>
          <div className='flex h-full flex-col'>
            <div className='h-[66%]'>{message}</div>
            <>
              {interactive}
            </>
          </div>
        </> : <>
          <h1 className='w-[70%] text-4xl font-bold'>
            {title}
          </h1>
        </>}
      </div>
    </>
  )
}

export default InteractiveCard;
