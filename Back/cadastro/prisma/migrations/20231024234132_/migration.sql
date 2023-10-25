-- CreateTable
CREATE TABLE `TB_CLIENTE` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NULL,
    `endereco` VARCHAR(191) NULL,
    `DATA-NASCIMENTO` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TB_CLIENTE_cpf_key`(`cpf`),
    UNIQUE INDEX `TB_CLIENTE_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vendedor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NULL,
    `endereco` VARCHAR(191) NULL,
    `dataNascimento` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Vendedor_cpf_key`(`cpf`),
    UNIQUE INDEX `Vendedor_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NotaFiscal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clienteId` INTEGER NOT NULL,
    `vendedorId` INTEGER NOT NULL,
    `codigoProduto` VARCHAR(191) NOT NULL,
    `nomeProduto` VARCHAR(191) NOT NULL,
    `unidadeMedida` VARCHAR(191) NOT NULL,
    `grupoProduto` VARCHAR(191) NOT NULL,
    `valorProduto` DOUBLE NOT NULL,
    `registroFiscal` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
