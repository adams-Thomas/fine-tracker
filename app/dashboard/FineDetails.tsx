'use client'

import Image from "next/image";
import FineItem from "../common/FineItem";
import InlineInput from "../common/InlineInput";
import { useStore } from "../context/MeetingStore";
import { useEffect, useState } from "react";
import { Fine, FinesMeeting } from "@prisma/client";
import MeetingWithFines from "@/prisma/types/FinesMeeting";

interface Props {
  meeting: MeetingWithFines,
  deleteMeeting: (id: number) => Promise<void>,
  updateMeeting: (id: number, meeting: FinesMeeting) => Promise<FinesMeeting>
}

type EditableFields = 'fines_master' | 'meeting_name';

function FineDetails(props: Props) {

  const { meeting, deleteMeeting, updateMeeting } = props;
  const [, setStore] = useStore((store) => store.selected);
  const [edit, setEdit] = useState(false);
  const [editted, setEditted] = useState(meeting);
  const [fines, setFines] = useState<Fine[]>([]);

  useEffect(() => {
    console.log('hello');
    setFines(meeting.fines);
  }, [meeting])

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

  async function onEditChange(save: boolean) {
    try {
      if (save) {
        const result = await updateMeeting(
          meeting.id,
          editted
        )

        setStore({
          selected: result
        });
      }
    } catch (error) {
      setEditted(meeting);
    } finally {
      setEdit(!edit);
    }
  }

  function setField(value: string, field: EditableFields) {
    setEditted({
      ...editted,
      [field]: value
    });
  }

  function copy() {
    navigator.clipboard.writeText(
      `${process.env.MEETING_URL}${meeting.meeting_code}`
    )
  }

  function fineDeleted(id: number) {
    const index = fines.findIndex(f => f.id === id);
    if (index === -1)
      return;

    fines.splice(index, 1);
  }

  return (<>
    <div className="w-full" key={meeting.id}>
      <div className="flex w-full">
        <InlineInput set={(value: string) => setField(value, 'meeting_name')} data={(editted ?? { meeting_name: '' }).meeting_name} edit={edit} header />

        {
          edit ? (<>
            <Image onClick={() => onEditChange(true)} className='cursor-pointer mr-2 ml-8' src='/icons/tick.svg' alt='tick' width={25} height={25} />
            <Image onClick={() => onEditChange(false)} className='cursor-pointer pr-3' src='/icons/cross-circle.svg' alt='cross' width={42} height={42} />
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
        <InlineInput set={(value: string) => setField(value, 'fines_master')} data={(editted ?? { fines_master: '' }).fines_master} edit={edit} />
      </div>

      <div className='flex mt-2'>
        <h3 className='mr-8'>Meeting Code:</h3>
        <p className="text-gainsboro">{meeting.meeting_code}</p>
        <Image onClick={copy} className='cursor-pointer ml-8 mr-2' src='/icons/copy.svg' width={25} height={25} alt='copy link' />
      </div>

      <div className='mt-10 overflow-auto h-[62vh] scroll-bar '>
        {
          fines.map((fine: Fine, i: number) =>
            <FineItem onDelete={fineDeleted} id={fine.id} giver={fine.giver} recipient={fine.recipient} amount={fine.amount} fine={fine.fine} key={i} deletable />
          )
        }
      </div>
    </div>
  </>)
}

export default FineDetails;
