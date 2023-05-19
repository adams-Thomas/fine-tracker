//TODO Make this better, IE form with server actions
//TODO find and add fines meeting rules to the screen. 
//TODO Also add disclaimer about using own rules.

'use client'

function NewMeeting() {

  async function formSubmit(e: any) {
    'use server'
    console.log(e);
  }

  return (<>
    <div>
      <h1 className='mb-10'>
        Add new fines meeting
      </h1>

      <form onSubmit={formSubmit}>
        <div className='mb-5'>
          <p className="text-gainsboro">Fines meeting name</p>
          <input name="meeting_name" placeholder="Enter meeting name..." className='bg-gainsboro rounded-lg form-input text-pearl-cyan' />
        </div>

        <div>
          <p className="text-gainsboro">Fines master</p>
          <input name="fines_master" placeholder="Enter name..." className='bg-gainsboro rounded-lg form-input text-pearl-cyan' />
        </div>

        <div className="mt-6">
          <button className="btn w-[100px] mr-6">
            Save
          </button>
          <button type='reset' className="btn btn-solid w-[70px]">
            Cancel
          </button>
        </div>
      </form>
    </div></>)
}

export default NewMeeting;
