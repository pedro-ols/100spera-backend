-- AlterTable
CREATE SEQUENCE dishes_id_seq;
ALTER TABLE "dishes" ALTER COLUMN "id" SET DEFAULT nextval('dishes_id_seq');
ALTER SEQUENCE dishes_id_seq OWNED BY "dishes"."id";

-- AlterTable
ALTER TABLE "tables" ALTER COLUMN "number" DROP DEFAULT;
DROP SEQUENCE "tables_number_seq";

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "tableNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_tableNumber_fkey" FOREIGN KEY ("tableNumber") REFERENCES "tables"("number") ON DELETE CASCADE ON UPDATE CASCADE;
