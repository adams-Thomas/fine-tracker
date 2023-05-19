'use server'

import client from "@/prisma/client";
import { auth } from "@clerk/nextjs";

export async function addMeeting(e: FormData) {
  try {
    let formData = {};
    e.forEach((value, key, parent) => {
      if (key.toLowerCase().includes('action'))
        return
  
      Object.assign(formData, {[key]: value});
    });
  
    const { userId } = auth();
  
    await client.finesMeeting.create({
      data: {
        ...formData as any,
        user_id: userId
      }
    })
  } catch (error) {
    console.error(error);
  }
}