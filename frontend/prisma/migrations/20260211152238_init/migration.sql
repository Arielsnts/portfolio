-- CreateTable
CREATE TABLE "Projeto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "tags" TEXT[],
    "link" TEXT NOT NULL,

    CONSTRAINT "Projeto_pkey" PRIMARY KEY ("id")
);
