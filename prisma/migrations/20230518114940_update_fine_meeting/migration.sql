/*
  Warnings:

  - You are about to drop the column `fine_name` on the `FinesMeeting` table. All the data in the column will be lost.
  - Added the required column `meeting_name` to the `FinesMeeting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FinesMeeting" DROP COLUMN "fine_name",
ADD COLUMN     "meeting_name" TEXT NOT NULL;
