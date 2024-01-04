-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_songId_fkey";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "favorite" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE CASCADE ON UPDATE CASCADE;
