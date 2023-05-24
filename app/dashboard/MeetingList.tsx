'use client'

import { FinesMeeting } from "@prisma/client";
import MeetingItem from "../common/MeetingItem";
import { useEffect } from "react";
import { useStore } from "../context/MeetingStore";

interface Props {
  meetings: FinesMeeting[],
  listMeetings: () => Promise<FinesMeeting[]>
}

function MeetingList(props: Props) {
  const { meetings, listMeetings } = props;
  const [list , setStore] = useStore((store) => store.list);
  const [refresh] = useStore((store) => store.refresh);

  useEffect(() => {
    setStore({
      list: meetings
    })
  })

  useEffect(() => {
    refreshList();
  }, [refresh])

  async function refreshList() {
    if (!refresh)
      return;

    const result = await listMeetings();
    setStore({
      list: result,
      refresh: false
    })
  }

  return (<>
    <div className="flex-[1] p-5 overflow-y-auto scroll-bar">
      {
        (list ?? []).map((meeting: FinesMeeting) =>
          <MeetingItem key={meeting.id} meeting={meeting} />
        )
      }
    </div>
  </>)
}

export default MeetingList;
