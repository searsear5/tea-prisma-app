-- CreateTable
CREATE TABLE "tea" (
    "tea_id" SERIAL NOT NULL,
    "teaname" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "tea_pkey" PRIMARY KEY ("tea_id")
);

-- CreateTable
CREATE TABLE "cart" (
    "cartid" SERIAL NOT NULL,
    "customerid" INTEGER NOT NULL,
    "teaid" INTEGER NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("cartid")
);

-- CreateTable
CREATE TABLE "orderHistory" (
    "orderHistory_id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "customerid" INTEGER NOT NULL,

    CONSTRAINT "orderHistory_pkey" PRIMARY KEY ("orderHistory_id")
);

-- CreateTable
CREATE TABLE "teaOrder" (
    "order_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "orderHistoryid" INTEGER NOT NULL,

    CONSTRAINT "teaOrder_pkey" PRIMARY KEY ("order_id")
);

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_customerid_fkey" FOREIGN KEY ("customerid") REFERENCES "customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_teaid_fkey" FOREIGN KEY ("teaid") REFERENCES "tea"("tea_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderHistory" ADD CONSTRAINT "orderHistory_customerid_fkey" FOREIGN KEY ("customerid") REFERENCES "customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teaOrder" ADD CONSTRAINT "teaOrder_orderHistoryid_fkey" FOREIGN KEY ("orderHistoryid") REFERENCES "orderHistory"("orderHistory_id") ON DELETE RESTRICT ON UPDATE CASCADE;
