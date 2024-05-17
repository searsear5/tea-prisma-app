/*
  Warnings:

  - You are about to drop the `teaOrder` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `orderHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `orderHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `orderHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `orderHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `orderHistory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "teaOrder" DROP CONSTRAINT "teaOrder_orderHistoryid_fkey";

-- AlterTable
ALTER TABLE "orderHistory" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "image_url" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- DropTable
DROP TABLE "teaOrder";
