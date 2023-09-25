/*
  Warnings:

  - You are about to drop the column `blood_group` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "blood_group",
DROP COLUMN "location";

-- CreateTable
CREATE TABLE "Donor" (
    "id" TEXT NOT NULL,
    "donorId" TEXT NOT NULL,
    "location" TEXT,

    CONSTRAINT "Donor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Donor" ADD CONSTRAINT "Donor_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
