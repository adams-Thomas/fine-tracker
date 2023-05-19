"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  placeholder: string
}

function SearchCode(props: Props) {
  const { placeholder } = props;
  const router = useRouter();

  function search() {
    router.push('/meeting')
  }

  return (<>
    <div className='
      flex
      gap-2
      mt-[]
    '>
      <input placeholder={placeholder} className="rounded-lg form-input text-pearl-cyan w-full" />
      <button className='btn' onClick={search}>
        <Image className="m-auto" src='/icons/search.svg' alt='search icon' width={25} height={25} />
      </button>
    </div>
  </>)

}

export default SearchCode;
