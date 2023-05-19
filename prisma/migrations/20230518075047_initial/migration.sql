-- CreateTable
CREATE TABLE "Fine" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "fine" VARCHAR(255) NOT NULL,
    "recipient" TEXT NOT NULL,
    "giver" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "fines_meeting_id" INTEGER NOT NULL,

    CONSTRAINT "Fine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinesMeeting" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "fines_master" TEXT NOT NULL,
    "fine_name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "FinesMeeting_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Fine" ADD CONSTRAINT "Fine_fines_meeting_id_fkey" FOREIGN KEY ("fines_meeting_id") REFERENCES "FinesMeeting"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
