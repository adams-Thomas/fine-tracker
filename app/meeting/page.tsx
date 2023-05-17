import AddFine from "@/components/meeting/AddFine";
import FineList from "@/components/meeting/FinesList";

function ViewMeeting() {
  return (<>
    <div className='bg-black-cyan rounded-lg w-[50%] max-w-[40rem] my-10 mx-auto h-[90vh] p-5'>
      <div className='flex'>
        <div>
          <h1>Meeting name</h1>

          <div className='flex mt-5'>
            <h3>Fines master:</h3>
            <div className='ml-5'>Thomas Adams</div>
          </div>
        </div>

        <button className='btn w-24 h-fit my-auto ml-auto'>
          Add Fine
        </button>
      </div>

      {/* <AddFine /> */}
      <FineList />
    </div>
  </>)
}

export default ViewMeeting;
