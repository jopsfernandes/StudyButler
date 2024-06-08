-- CreateTable
CREATE TABLE "Caderno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT
);

-- CreateTable
CREATE TABLE "Materia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "caderno_id" INTEGER NOT NULL,
    CONSTRAINT "Materia_caderno_id_fkey" FOREIGN KEY ("caderno_id") REFERENCES "Caderno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Topico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "materia_id" INTEGER NOT NULL,
    CONSTRAINT "Topico_materia_id_fkey" FOREIGN KEY ("materia_id") REFERENCES "Materia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Questao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "enunciado" TEXT NOT NULL,
    "resposta_correta" TEXT NOT NULL,
    "nivel_dificuldade" INTEGER NOT NULL,
    "topico_id" INTEGER NOT NULL,
    CONSTRAINT "Questao_topico_id_fkey" FOREIGN KEY ("topico_id") REFERENCES "Topico" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
