'use client'

import { ChangeEvent, use, useEffect, useState } from "react";

interface Props {
  data: string,
  edit: boolean,
  header?: boolean,
  set: (value: string) => void
}

function InlineInput(props: Props) {
  const { data, edit, header, set } = props;
  const [ text, setText ] = useState('');
  
  function textChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
    set(e.target.value);
  }

  useEffect(() => {
    setText(data)
  }, [data])

  return(<>
    {
      edit ? 
        <input className={`inline-input ${header ? 'inline-input_header' : ''}`} value={text} onChange={textChange}/> : 
        <>{
          header ? 
            <h1>{text}</h1> :
            <p className="text-gainsboro">{text}</p>
        }</>
        
    }
  </>)
}

export default InlineInput;