'use client'

import { ChangeEvent, useState } from "react";

interface Props {
  data: string,
  edit: boolean,
  header?: boolean
}

function InlineInput(props: Props) {
  const { data, edit, header } = props;
  const [ text, setText ] = useState(data);
  
  function textChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

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