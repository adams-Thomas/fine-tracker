'use client';

import { useState } from "react";
import FineDetails from "./FineDetails";
import NewMeeting from "./NewMeeting";
import NoFine from "./NoFine";

interface Props {
  addMeeting: (e: FormData) => Promise<void>
}

const ViewTypes = ['no_meeting', 'new_meeting', 'view_meeting'] as const;
type ViewType = typeof ViewTypes[number];

function IndividualFine(props: Props) {
  const [view, setView] = useState<ViewType>(ViewTypes[0]);
  const { addMeeting } = props;

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
          return <FineDetails />
      }
    })()}
  </>)
}

export default IndividualFine;
