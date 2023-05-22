'use client';

import { useEffect, useState } from "react";
import FineDetails from "./FineDetails";
import NewMeeting from "./NewMeeting";
import NoFine from "./NoFine";
import { useStore } from "../context/MeetingStore";

interface Props {
  addMeeting: (e: FormData) => Promise<void>,
  deleteMeeting: (id: number) => Promise<void>
}

const ViewTypes = ['no_meeting', 'new_meeting', 'view_meeting'] as const;
type ViewType = typeof ViewTypes[number];

function IndividualFine(props: Props) {
  const [view, setView] = useState<ViewType>(ViewTypes[0]);
  const { addMeeting, deleteMeeting } = props;

  const [meeting] = useStore((store) => store.selected);

  useEffect(() => {
    if (!meeting) 
      setView(ViewTypes[0])
    else
      setView(ViewTypes[2])
  }, [meeting])

  function changeView(index: number) {
    setView(
      ViewTypes[index]
    )
  }

  return (<>
    {(() => {
      switch (view) {
        default:
        case ViewTypes[0]:
          return <NoFine showAdd={changeView}/>
        case ViewTypes[1]:
          return <NewMeeting addMeeting={addMeeting} onComplete={changeView} />
        case ViewTypes[2]:
          if (!meeting)
            return <NoFine showAdd={changeView} />
          return <FineDetails deleteMeeting={deleteMeeting} meeting={meeting} />
      }
    })()}
  </>)
}

export default IndividualFine;
