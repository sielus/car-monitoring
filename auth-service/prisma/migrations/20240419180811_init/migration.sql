-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserScopeRelation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "scopeId" TEXT NOT NULL,

    CONSTRAINT "UserScopeRelation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scope" (
    "id" TEXT NOT NULL,
    "scope" TEXT NOT NULL,

    CONSTRAINT "Scope_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_login_userId_key" ON "User"("login", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserScopeRelation_scopeId_userId_key" ON "UserScopeRelation"("scopeId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "Scope_scope_key" ON "Scope"("scope");

-- AddForeignKey
ALTER TABLE "UserScopeRelation" ADD CONSTRAINT "UserScopeRelation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserScopeRelation" ADD CONSTRAINT "UserScopeRelation_scopeId_fkey" FOREIGN KEY ("scopeId") REFERENCES "Scope"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
