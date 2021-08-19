-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "blurBase64" TEXT NOT NULL,
    "path" TEXT NOT NULL,

    PRIMARY KEY ("id")
);
