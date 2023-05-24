'use server'

import { prisma } from "@/prisma/client";
import { Fine, FinesMeeting } from "@prisma/client";

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export async function find(code: string) {
  try {
    if (code.length !== 5 && !CHARS.includes(code))
      throw new Error('invalid code')

    const meeting = await prisma.finesMeeting.findFirstOrThrow({
      where: {
        meeting_code: code
      },
      include: {
        fines: true
      }
    });

    return meeting
  } catch (error) {
    console.error(error);
  }
}

export async function addFine(data: FormData, fines_meeting_id: number) {
  try {
    let formData = {};
    data.forEach((v, key, parent) => {
      if (key.toLowerCase().includes('action'))
        return;
      
      let value: string | number = v.toString();
      if (key === 'amount')
        value = +value;
      Object.assign(formData, { [key]: value });
    });

    const newFine = await prisma.fine.create({
      data: {
        ...formData as Fine,
        fines_meeting_id
      }
    })

    return newFine;
  } catch (error) {
    console.error(error);
  }
}
