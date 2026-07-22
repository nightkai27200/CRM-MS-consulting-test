-- CreateTable
CREATE TABLE "Prospect" (
    "id" TEXT NOT NULL,
    "entreprise" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "telephone" TEXT,
    "email" TEXT,
    "secteur" TEXT,
    "source" TEXT,
    "statut" TEXT NOT NULL,
    "commentaires" TEXT,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Prospect_pkey" PRIMARY KEY ("id")
);
