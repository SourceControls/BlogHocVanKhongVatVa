/*
  Warnings:

  - You are about to alter the column `view` on the `post` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `post` MODIFY `view` INTEGER NOT NULL DEFAULT 0;
