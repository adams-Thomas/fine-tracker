'use client'

import Image from 'next/image';
import { deleteFine } from '../dashboard/actions';

interface Props {
  giver: string;
  recipient: string;
  amount: number;
  fine: string;
  deletable?: boolean;
  id: number;
  onDelete?: (id: number) => void
}

function FineItem(props: Props) {
  const { giver, recipient, amount, fine, deletable, id, onDelete } = props;

  async function delFine() {
    await deleteFine(id);

    if (onDelete)
      onDelete(id);
  }

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
        <Image onClick={delFine} className='cursor-pointer mr-5 ml-auto' src='/icons/delete.svg' width={25} height={25} alt='Delete' />
      ) : ''}
    </div>
  </>)
}

export default FineItem;