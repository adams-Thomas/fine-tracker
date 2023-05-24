'use server'

import { prisma } from "@/prisma/client";
import { auth } from "@clerk/nextjs";
import { FinesMeeting } from "@prisma/client";
import { cache } from "react";

export async function addMeeting(e: FormData) {
  try {
    let formData = {};
    e.forEach((value, key, parent) => {
      if (key.toLowerCase().includes('action'))
        return

      Object.assign(formData, { [key]: value });
    });

    const { userId } = auth();
    const meeting_code = generateMeetingCode();

    await prisma.finesMeeting.create({
      data: {
        ...formData as any,
        user_id: userId,
        meeting_code
      }
    })
  } catch (error) {
    console.error(error);
  }
}

export async function listMeetings(): Promise<FinesMeeting[]> {
  try {
    const { userId } = auth();
    if (!userId) return [];

    const meetings = await prisma.finesMeeting.findMany({
      where: {
        user_id: userId
      },
      include: {
        fines: true
      }
    })

    return meetings;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const list = cache(async () => {
  try {
    const { userId } = auth();
    if (!userId) return [];

    const meetings = await prisma.finesMeeting.findMany({
      where: {
        user_id: userId
      },
      include: {
        fines: true
      }
    })

    return meetings;
  } catch (error) {
    console.error(error);
    return [];
  }
})

export async function deleteMeeting(id: number) {
  try {
    const { userId } = auth();
    if (!userId)
      throw new Error('Unauthorized')

    await prisma.finesMeeting.deleteMany({
      where: {
        id: id,
        user_id: userId
      }
    })
  } catch (error) {
    console.error(error);
  }
}

export async function editMeeting(id: number, meeting: FinesMeeting) {
  try {
    const { userId } = auth();
    if (!userId)
      throw new Error('Unauthorized')

    const updatedMeeting = await prisma.finesMeeting.update({
      where: {
        id
      },
      data: {
        fines_master: meeting.fines_master,
        meeting_name: meeting.meeting_name
      },
      include: {
        fines: true
      }
    })

    return updatedMeeting;
  } catch (error) {
    console.error(error);
    return meeting
  }
}

export async function deleteFine(id: number) {
  try {
    // const { userId } = auth();
    // if (!userId)
    //   throw new Error('Unauthorized')

    const fine = await prisma.fine.findFirstOrThrow({
      where: {
        id
      }
    });

    await prisma.fine.delete({
      where: {
        id: fine.id
      }
    });
  } catch (error) {
    console.error(error);
  }
}

//* Helper functions -- Possibly extract to a new file
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateMeetingCode() {
  let result = '';
  const charsLength = CHARS.length;
  for (let i = 0; i < 5; i++) {
    result += CHARS.charAt(Math.floor(Math.random() * charsLength));
  }
  return result;
}