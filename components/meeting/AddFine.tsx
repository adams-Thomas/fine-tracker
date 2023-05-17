function AddFine() {
  return (<>
    <div className="flex mt-8">
      <div className='flex flex-col mr-10 flex-[2]'>
        <label>Who is being fined:</label>
        <input placeholder="Enter name..." className='form-input bg-gainsboro text-pearl-cyan rounded-lg' />
      </div>
      <div className='flex flex-col flex-1'>
        <label>Number of fines: </label>
        <input placeholder="Enter number..." type='number' className='form-input bg-gainsboro text-pearl-cyan rounded-lg' />
      </div>
    </div>

    <div className='flex flex-col mt-4'>
      <label>Your name: </label>
      <input placeholder="Enter name..." type='text' className='form-input bg-gainsboro text-pearl-cyan rounded-lg' />
    </div>
    <div className='flex flex-col mt-4'>
      <label>For the following reason:</label>
      <textarea placeholder="Enter reason..." className='form-textarea bg-gainsboro text-pearl-cyan rounded-lg' />
    </div>

    <div className="text-center mt-4">
      <button className='btn w-28'>
        Save
      </button>
      <button className='btn btn-solid w-28 ml-5'>
        Cancel
      </button>
    </div>
  </>)
}

export default AddFine;
