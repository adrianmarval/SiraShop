-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "isShipped" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "trackingId" TEXT;
