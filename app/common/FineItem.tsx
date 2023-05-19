import Image from 'next/image';

interface Props {
  giver: string;
  recipient: string;
  amount: number;
  fine: string;
  deletable?: boolean
}

function FineItem(props: Props) {
  const { giver, recipient, amount, fine, deletable } = props;

  return (<>
    <div className='mt-5 flex'>
      <div>
        <h3>
          {giver} to {recipient} for {amount}
        </h3>
        <div>
          {fine}
        </div>
      </div>
      {deletable ? (
        <Image className='cursor-pointer mr-5 ml-auto' src='/icons/delete.svg' width={25} height={25} alt='Delete' />
      ) : ''}
    </div>
  </>)
}

export default FineItem;