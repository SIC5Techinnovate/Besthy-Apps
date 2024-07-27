-- CreateTable
CREATE TABLE "DetakJantung" (
    "id" TEXT NOT NULL,
    "detak" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "DetakJantung_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DetakJantung" ADD CONSTRAINT "DetakJantung_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
