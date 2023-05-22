'use server'

import { prisma } from "@/prisma/client";
import { auth } from "@clerk/nextjs";
import { FinesMeeting } from "@prisma/client";

export async function addMeeting(e: FormData) {
  try {
    let formData = {};
    e.forEach((value, key, parent) => {
      if (key.toLowerCase().includes('action'))
        return
  
      Object.assign(formData, {[key]: value});
    });
  
    const { userId } = auth();
  
    await prisma.finesMeeting.create({
      data: {
        ...formData as any,
        user_id: userId
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
