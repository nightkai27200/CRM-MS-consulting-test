-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "entreprise" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "telephone" TEXT,
    "email" TEXT,
    "secteur" TEXT,
    "statut" TEXT NOT NULL DEFAULT 'Client actif',
    "commentaires" TEXT,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);
