/*
  Warnings:

  - You are about to drop the column `name` on the `orderHistory` table. All the data in the column will be lost.
  - Added the required column `teaname` to the `orderHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orderHistory" DROP COLUMN "name",
ADD COLUMN     "teaname" TEXT NOT NULL;
