/*
  Warnings:

  - You are about to alter the column `contact` on the `Profile` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `MediumInt`.

*/
-- AlterTable
ALTER TABLE `Profile` MODIFY `contact` MEDIUMINT NULL;
