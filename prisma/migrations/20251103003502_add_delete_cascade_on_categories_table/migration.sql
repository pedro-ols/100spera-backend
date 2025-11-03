-- DropForeignKey
ALTER TABLE "dishes" DROP CONSTRAINT "dishes_categoryId_fkey";

-- AddForeignKey
ALTER TABLE "dishes" ADD CONSTRAINT "dishes_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
