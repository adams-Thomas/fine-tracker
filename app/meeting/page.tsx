'use client'

import { useEffect, useState } from "react";
import AddFine from "./AddFine";
import FineList from "./FinesList";
import { find } from './actions';
import { useSearchParams } from "next/navigation";
import { Fine, FinesMeeting } from "@prisma/client";
import MeetingWithFines from "@/prisma/types/FinesMeeting";

const ViewTypes = ['list', 'add'] as const;
type ViewType = typeof ViewTypes[number];

function ViewMeeting() {
  const [view, setView] = useState<ViewType>(ViewTypes[0])
  const urlQuery = useSearchParams();
  const [meeting, setMeeting] = useState<MeetingWithFines>();

  useEffect(() => {
    const code = urlQuery.get('code');
    if (!code)
      return;

    find(code).then((result) => {
      setMeeting(result);
    }).catch(error => console.error(error))
  }, [urlQuery])

  function changeView(index: number) {
    setView(ViewTypes[index]);
  }

  function fineAdded(fine?: Fine) {
    changeView(0);
    if (!fine || !meeting)
      return;

    const fines = meeting.fines;
    fines.push(fine);

    setMeeting({
      ...meeting,
      fines
    });
  }

  if (!meeting)
    return <></>

  return (<>
    <div className='bg-black-cyan rounded-lg w-[50%] max-w-[40rem] my-10 mx-auto h-[90vh] p-5'>
      <div className='flex'>
        <div>
          <h1>{meeting.meeting_name}</h1>

          <div className='flex mt-5'>
            <h3>Fines master:</h3>
            <div className='ml-5'>{meeting.fines_master}</div>
          </div>
        </div>

        {
          view === ViewTypes[0] ? (
            <button className='btn w-24 h-fit my-auto ml-auto' onClick={() => changeView(1)}>
              Add Fine
            </button>
          ) : <></>
        }
      </div>

      {
        (view === ViewTypes[0]) ?
          <FineList fines={meeting.fines}/> :
          <AddFine onComplete={fineAdded} onCancel={changeView} meetingId={meeting.id}/>
      }
    </div>
  </>)
}

export default ViewMeeting;
