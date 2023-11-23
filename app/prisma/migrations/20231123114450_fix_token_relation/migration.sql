/*
  Warnings:

  - A unique constraint covering the columns `[activateToken]` on the table `ActivateToken` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ActivateToken_activateToken_key" ON "ActivateToken"("activateToken");
