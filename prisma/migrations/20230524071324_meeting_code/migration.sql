/*
  Warnings:

  - Added the required column `meeting_code` to the `FinesMeeting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FinesMeeting" ADD COLUMN     "meeting_code" TEXT NOT NULL;
