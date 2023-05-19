'use client'

import Image from "next/image";

interface Props {
  showAdd: (view: number) => void;
}

function NoFine({ showAdd }: Props) {
  return (<>
    <div className="m-auto w-fit">
      <h2 className="text-pearl-cyan font-extrabold text-[3rem]">
        No fine selected
      </h2>
      <Image className="m-auto" src='/icons/empty-box.svg' alt='no fine box' height={250} width={250} />
      <button onClick={() => showAdd(1)} className="btn w-36 mx-auto mt-3 block">
        New Fine
      </button>
    </div>
  </>)
}

export default NoFine;
