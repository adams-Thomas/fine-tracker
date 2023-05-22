-- DropForeignKey
ALTER TABLE "Fine" DROP CONSTRAINT "Fine_fines_meeting_id_fkey";

-- AddForeignKey
ALTER TABLE "Fine" ADD CONSTRAINT "Fine_fines_meeting_id_fkey" FOREIGN KEY ("fines_meeting_id") REFERENCES "FinesMeeting"("id") ON DELETE CASCADE ON UPDATE CASCADE;
