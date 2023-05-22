//* List item for a Fines Meeting
'use client'

import { FinesMeeting } from "@prisma/client";
import { useStore } from "../context/MeetingStore";

interface Props {
  meeting: FinesMeeting
}

function MeetingItem(props: Props) {
  const { meeting } = props;

  const [, setStore] = useStore((store) => store.selected);
  function setMeeting() {
    setStore({
      selected: meeting
    });
  }

  return (<>
    <div className="border-b p-2 cursor-pointer" onClick={setMeeting}>
      <h2 className="text-[1rem] w-max-[15rem] whitespace-nowrap overflow-hidden text-ellipsis my-2 hover:text-dark-cyan border-gainsboro">
        {meeting.meeting_name}
      </h2>
    </div>
  </>)
}

export default MeetingItem;
