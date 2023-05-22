'use client'

import Image from "next/image";
import FineItem from "../common/FineItem";
import InlineInput from "../common/InlineInput";
import { FinesMeeting } from "@prisma/client";
import { useStore } from "../context/MeetingStore";
import { useState } from "react";

interface Props {
  meeting: FinesMeeting,
  deleteMeeting: (id: number) => Promise<void>
}

function FineDetails(props: Props) {

  const {meeting, deleteMeeting} = props;
  const [, setStore] = useStore((store) => store.selected);
  const [edit, setEdit] = useState(false);

  function close() {
    setStore({
      selected: undefined
    });
  }

  async function del() {
    if (!meeting)
      return;

    await deleteMeeting(meeting.id)
  }

  return (<>
    <div className="w-full" key={meeting.id}>
      <div className="flex w-full">
        <InlineInput data={(meeting ?? {meeting_name: ''}).meeting_name} edit={edit} header />

        {
          edit ? (<>
            <Image className='cursor-pointer mr-2 ml-8' src='/icons/tick.svg' alt='tick' width={25} height={25} />
            <Image onClick={() => setEdit(false)} className='cursor-pointer pr-3' src='/icons/cross-circle.svg' alt='cross' width={42} height={42} />
          </>) :
            <Image onClick={() => setEdit(true)} className='cursor-pointer ml-8 mr-2' src='/icons/edit.svg' width={25} height={25} alt='Edit' />

        }
        <Image onClick={del} className='cursor-pointer ml-2' src='/icons/delete.svg' width={25} height={25} alt='Delete' />

        <button className='btn btn-no-border ml-auto w-20 h-[2.625rem]' onClick={close}>
          Close
        </button>
      </div>

      <div className='flex mt-10'>
        <h3 className='mr-10'>Fines master:</h3>
        <InlineInput data={(meeting ?? {fines_master: ''}).fines_master} edit={edit} />
      </div>

      <div className='mt-10 overflow-auto h-[62vh] scroll-bar '>
        {
          (meeting as any).fines.map((fine: any, i: number) =>
            <FineItem giver={fine.giver} recipient={fine.recipient} amount={fine.amount} fine={fine.fine} key={i} deletable />
          )
        }
      </div>
    </div>
  </>)
}

export default FineDetails;
