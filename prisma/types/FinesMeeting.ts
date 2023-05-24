// import Fine from "./Fine"

import { Prisma } from "@prisma/client";

// type FinesMeeting = {
//   id: number,
//   created_at: Date,
//   update_at: Date,
//   fines_master: string,
//   meeting_name: string,
//   user_id: string,
//   fines: Fine[],
//   meeting_code: string
// }

// export default FinesMeeting;

const meetingWithFines = Prisma.validator<Prisma.FinesMeetingArgs>()({
  include: {
    fines: true
  }
});

type MeetingWithFines = Prisma.FinesMeetingGetPayload<typeof meetingWithFines>;
export default MeetingWithFines;