import Image from "next/image";
import FineItem from "../common/FineItem";
import InlineInput from "../common/InlineInput";

function FineDetails() {
  const edit = false;
  const mockInnerFines: any[] = [
    {
      giver: 'Thomas Adams',
      recipient: 'Neil Brand',
      amount: 2,
      fine: 'For being an absolute lad'
    }
  ];

  return (<>
    <div className="w-full">
      <div className="flex w-full">
        <InlineInput data="Header" edit={edit} header />

        {
          edit ? (<>
            <Image className='cursor-pointer mr-2 ml-auto' src='/icons/tick.svg' alt='tick' width={30} height={30} />
            <Image className='cursor-pointer pr-3 border-r' src='/icons/cross-circle.svg' alt='cross' width={42} height={42} />
          </>) :
            <Image className='cursor-pointer ml-auto mr-3' src='/icons/edit.svg' width={30} height={30} alt='Edit' />

        }
        <Image className='cursor-pointer ml-3' src='/icons/delete.svg' width={30} height={30} alt='Delete' />
      </div>

      <div className='flex mt-10'>
        <h3 className='mr-10'>Fines master:</h3>
        <InlineInput data='Thomas' edit={edit} />
      </div>

      <div className='mt-10 overflow-auto h-[62vh] scroll-bar '>
        {
          mockInnerFines.map((fine: any, i: number) =>
            <FineItem giver={fine.giver} recipient={fine.recipient} amount={fine.amount} fine={fine.fine} key={i} deletable />
          )
        }
      </div>
    </div>
  </>)
}

export default FineDetails;
