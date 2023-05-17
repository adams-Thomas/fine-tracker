import Image from "next/image";

function NoFine() {
  return (<>
    <div className="m-auto w-fit">
      <h2 className="text-pearl-cyan font-extrabold text-[3rem]">
        No fine selected
      </h2>
      <Image className="m-auto" src='/icons/empty-box.svg' alt='no fine box' height={250} width={250} />
      <button className="btn w-36 mx-auto mt-3 block">
        New Fine
      </button>
    </div>
  </>)
}

export default NoFine;
