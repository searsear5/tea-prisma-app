/*
  Warnings:

  - Added the required column `sumprice` to the `cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cart" ADD COLUMN     "sumprice" INTEGER NOT NULL;
