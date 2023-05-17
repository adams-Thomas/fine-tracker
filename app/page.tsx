import InteractiveCard, { Props as CardData } from '@/components/InteractiveCard';
import AuthButtons from '@/components/home/AuthButtons';
import SearchCode from '@/components/home/SearchCode';

export default function Home() {
  const cards: CardData[] = [
    {
      title: 'Are you the fines master?',
      message: `As a fines master you are in charge of creating and running the meeting. There are some rules that everyone must adhere to, these will be explained as you create the meeting. Or you can just use your own. \n To get started, click below to login or signup.`,
      interactive: <AuthButtons />
    },
    {
      title: 'Or, Are you attending the fines meeting?',
      message: 'As someone attending the fines meeting, you are required to come nominate other attendees fines based on something they did or said that is worth a fine. To get started, enter the code given to you by the fines master below:',
      interactive: <SearchCode placeholder='Enter code'/>
    }
  ]

  return (
    <>
      <div className="
        flex
        gap-10
        mx-auto
        pt-[10%]
        w-fit
        min-h-[100vh]
      ">
        {
          cards.map((data: CardData, i: number) => <InteractiveCard key={i} title={data.title} message={data.message} interactive={data.interactive} />)
        }
      </div>
    </>
  );
}
