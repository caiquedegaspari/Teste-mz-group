-- CreateTable
CREATE TABLE "SaleHistory" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "product" TEXT NOT NULL,
    "sellerName" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "SaleHistory_id_key" ON "SaleHistory"("id");
