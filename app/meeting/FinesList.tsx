import { Fine } from "@prisma/client";
import FineItem from "../common/FineItem";

interface Props {
  fines: Fine[]
}

function FineList(props: Props) {
  const { fines } = props;
  
  return (<>
    <h2 className='mt-10' >Current Fines: </h2>
    <div className='mt-5 overflow-auto h-[66vh] scroll-bar '>
      {
        fines.map((fine: Fine, i: number) =>
          <FineItem id={fine.id} giver={fine.giver} recipient={fine.recipient} amount={fine.amount} fine={fine.fine} key={i} />
        )
      }
    </div>
  </>)
}

export default FineList;