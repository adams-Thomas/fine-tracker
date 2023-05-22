import { UserButton } from "@clerk/nextjs";
import IndividualFine from "./IndividualFine";
import { addMeeting, listMeetings } from './actions';
import { FinesMeeting } from "@prisma/client";
import MeetingItem from "../common/MeetingItem";


const mockFines: any[] = [];

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
        <div className="flex-[1] p-5 overflow-y-auto scroll-bar">
          {
            (meetings ?? []).map((meeting: FinesMeeting) => 
              <MeetingItem key={meeting.id} meeting={meeting} />
            )
          }
        </div>
        <div className="flex-[3] p-5 flex">
          <IndividualFine addMeeting={addMeeting}/>
        </div>
      </div>
    </div>
  </>)
}

export default Dashboard;
