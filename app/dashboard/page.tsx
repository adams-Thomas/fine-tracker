import { UserButton } from "@clerk/nextjs";
import IndividualFine from "./IndividualFine";
import { addMeeting, deleteMeeting, editMeeting, listMeetings, list } from './actions';
import { FinesMeeting } from "@prisma/client";
import MeetingItem from "../common/MeetingItem";
import MeetingList from "./MeetingList";

async function Dashboard() {
  const meetings = await listMeetings();

  return (<>
    <div className="h-[100vh]">
      <div className='flex px-5 pt-5'>
        <h1 className='text-gainsboro'>
          Dashboard
        </h1>
        <UserButton appearance={{
          elements: {
            rootBox: 'my-auto ml-auto'
          }
        }} />
      </div>

      <div className="bg-black-cyan rounded-lg mx-20 my-10 flex divide-x border-gainsboro" style={{ height: 'calc(100vh - 9rem)' }}>
        <MeetingList meetings={meetings} listMeetings={listMeetings}/>
        <div className="flex-[3] p-5 flex">
          <IndividualFine addMeeting={addMeeting} deleteMeeting={deleteMeeting} updateMeeting={editMeeting}/>
        </div>
      </div>
    </div>
  </>)
}

export default Dashboard