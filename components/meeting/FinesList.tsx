import FineItem from "../FineItem";

const mockInnerFines: any[] = [
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
  {
    giver: 'Thomas Adams',
    recipient: 'Neil Brand',
    amount: 2,
    fine: 'For being an absolute lad'
  },
];

function FineList() {
  return (<>
    <h2 className='mt-10' >Current Fines: </h2>
    <div className='mt-5 overflow-auto h-[66vh] scroll-bar '>
      {
        mockInnerFines.map((fine: any, i: number) =>
          <FineItem giver={fine.giver} recipient={fine.recipient} amount={fine.amount} fine={fine.fine} key={i} />
        )
      }
    </div>
  </>)
}

export default FineList;