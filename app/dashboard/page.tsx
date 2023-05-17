import IndividualFine from "@/components/dashboard/IndividualFine";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const mockFines: any[] = [];

function Dashboard() {
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
            mockFines.map((fine) => (
              <div key={fine.id} className="border-b p-2 cursor-pointer">
                <h2 className="text-[1rem] w-max-[15rem] whitespace-nowrap overflow-hidden text-ellipsis my-2 hover:text-dark-cyan border-gainsboro">
                  {fine.name}
                </h2>
              </div>))
          }
        </div>
        <div className="flex-[3] p-5 flex">
          <IndividualFine />
        </div>
      </div>
    </div>
  </>)
}

export default Dashboard;
