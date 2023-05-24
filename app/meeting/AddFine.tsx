'use client'
import { Fine } from '@prisma/client';
import { addFine } from './actions';

interface Props {
  onCancel: (index: number) => void,
  meetingId: number,
  onComplete: (result?: Fine) => void
}

function AddFine(props: Props) {

  const { onCancel, meetingId, onComplete } = props;

  async function add(e: FormData) {
    try {
      const result = await addFine(e, meetingId);
      onComplete(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (<>
    <form action={(e) => add(e)}>
      <div className="flex mt-8">
        <div className='flex flex-col mr-10 flex-[2]'>
          <label>Who is being fined:</label>
          <input name='recipient' placeholder="Enter name..." className='form-input bg-gainsboro text-pearl-cyan rounded-lg' />
        </div>
        <div className='flex flex-col flex-1'>
          <label>Number of fines: </label>
          <input name='amount' placeholder="Enter number..." type='number' className='form-input bg-gainsboro text-pearl-cyan rounded-lg' />
        </div>
      </div>

      <div className='flex flex-col mt-4'>
        <label>Your name: </label>
        <input name='giver' placeholder="Enter name..." type='text' className='form-input bg-gainsboro text-pearl-cyan rounded-lg' />
      </div>
      <div className='flex flex-col mt-4'>
        <label>For the following reason:</label>
        <textarea name='fine' placeholder="Enter reason..." className='form-textarea bg-gainsboro text-pearl-cyan rounded-lg' />
      </div>

      <div className="text-center mt-4">
        <button className='btn w-28'>
          Save
        </button>
        <button type='reset' className='btn btn-solid w-28 ml-5' onClick={() => onCancel(0)}>
          Cancel
        </button>
      </div>
    </form>
  </>)
}

export default AddFine;
