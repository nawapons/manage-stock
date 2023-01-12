-- CreateTable
CREATE TABLE `tb_product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `barcode` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
