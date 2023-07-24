-- CreateTable
CREATE TABLE `advertisement` (
    `advertisementId` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(200) NOT NULL,
    `description` VARCHAR(500) NULL,
    `image` VARCHAR(500) NULL,
    `displayPosition` VARCHAR(50) NOT NULL,
    `target` VARCHAR(500) NOT NULL,
    `startDate` DATE NOT NULL,
    `endDate` DATE NOT NULL,
    `impressionCount` INTEGER NOT NULL DEFAULT 0,
    `clickCount` INTEGER NOT NULL DEFAULT 0,
    `visibility` BOOLEAN NULL DEFAULT true,
    `price` DECIMAL(10, 7) NOT NULL DEFAULT 0.0000000,
    `createdAt` DATETIME(0) NOT NULL DEFAULT (now()),
    `createdBy` INTEGER NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `updatedBy` INTEGER NULL,

    INDEX `createdBy`(`createdBy`),
    INDEX `updatedBy`(`updatedBy`),
    PRIMARY KEY (`advertisementId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `categoryId` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryName` VARCHAR(200) NOT NULL,
    `slug` VARCHAR(200) NOT NULL,
    `description` VARCHAR(200) NULL,
    `group` VARCHAR(200) NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT (now()),
    `createdBy` INTEGER NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `updatedBy` INTEGER NULL,

    UNIQUE INDEX `categoryName`(`categoryName`),
    UNIQUE INDEX `slug`(`slug`),
    INDEX `createdBy`(`createdBy`),
    INDEX `updatedBy`(`updatedBy`),
    PRIMARY KEY (`categoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comment` (
    `commentId` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(200) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT (now()),
    `postId` INTEGER NOT NULL,
    `createdBy` INTEGER NOT NULL,

    INDEX `createdBy`(`createdBy`),
    INDEX `postId`(`postId`),
    PRIMARY KEY (`commentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `literary` (
    `literaryId` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(200) NOT NULL,
    `slug` VARCHAR(200) NOT NULL,
    `intro` TEXT NOT NULL,
    `summary` TEXT NOT NULL,
    `authorName` VARCHAR(200) NULL,
    `featured` BOOLEAN NOT NULL DEFAULT false,
    `visibility` BOOLEAN NOT NULL DEFAULT true,
    `timeOfCreation` VARCHAR(50) NULL,
    `image` VARCHAR(500) NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT (now()),
    `createdBy` INTEGER NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `updatedBy` INTEGER NULL,

    UNIQUE INDEX `title`(`title`),
    UNIQUE INDEX `slug`(`slug`),
    INDEX `createdBy`(`createdBy`),
    INDEX `updatedBy`(`updatedBy`),
    PRIMARY KEY (`literaryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `literarycategory` (
    `categoryId` INTEGER NOT NULL,
    `literaryId` INTEGER NOT NULL,

    INDEX `literaryId`(`literaryId`),
    PRIMARY KEY (`categoryId`, `literaryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post` (
    `postId` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(200) NOT NULL,
    `slug` VARCHAR(200) NULL DEFAULT '',
    `subTitle` VARCHAR(200) NULL DEFAULT '',
    `summary` VARCHAR(500) NULL DEFAULT '',
    `htmlContent` TEXT NULL,
    `featuredImage` VARCHAR(500) NULL,
    `featured` BOOLEAN NOT NULL DEFAULT false,
    `status` ENUM('DRAFT', 'PENDING', 'PUBLISHED', 'HIDE', 'DELETED') NOT NULL DEFAULT 'DRAFT',
    `visibility` ENUM('PUBLIC', 'MEMBER', 'PAIDMEMBER') NOT NULL DEFAULT 'PUBLIC',
    `view` BIGINT NOT NULL DEFAULT 0,
    `createdBy` INTEGER NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT (now()),
    `updatedAt` DATETIME(3) NOT NULL,
    `updatedBy` INTEGER NULL,
    `publishedBy` INTEGER NULL,
    `literary` INTEGER NULL,

    UNIQUE INDEX `slug`(`slug`),
    INDEX `createdBy`(`createdBy`),
    INDEX `literary`(`literary`),
    INDEX `publishedBy`(`publishedBy`),
    INDEX `updatedBy`(`updatedBy`),
    PRIMARY KEY (`postId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `postreaction` (
    `postId` INTEGER NOT NULL,
    `createdBy` INTEGER NOT NULL,
    `type` ENUM('LIKE', 'DISLIKE') NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT (now()),

    INDEX `createdBy`(`createdBy`),
    PRIMARY KEY (`postId`, `createdBy`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `posttag` (
    `postId` INTEGER NOT NULL,
    `tagId` INTEGER NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT (now()),

    INDEX `tagId`(`tagId`),
    PRIMARY KEY (`postId`, `tagId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `setting` (
    `settingId` INTEGER NOT NULL AUTO_INCREMENT,
    `group` VARCHAR(50) NOT NULL DEFAULT 'core',
    `key` VARCHAR(50) NOT NULL,
    `value` TEXT NULL,
    `type` VARCHAR(50) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `updatedBy` INTEGER NULL,

    INDEX `updatedBy`(`updatedBy`),
    PRIMARY KEY (`settingId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tag` (
    `tagId` INTEGER NOT NULL AUTO_INCREMENT,
    `tagName` VARCHAR(200) NOT NULL,
    `slug` VARCHAR(200) NOT NULL,
    `description` VARCHAR(500) NULL,
    `visibility` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(0) NOT NULL DEFAULT (now()),
    `createdBy` INTEGER NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `updatedBy` INTEGER NULL,

    UNIQUE INDEX `tagName`(`tagName`),
    UNIQUE INDEX `slug`(`slug`),
    INDEX `createdBy`(`createdBy`),
    INDEX `updatedBy`(`updatedBy`),
    PRIMARY KEY (`tagId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `slug` VARCHAR(200) NULL,
    `bio` TEXT NULL,
    `avatarImage` VARCHAR(500) NULL,
    `coverImage` VARCHAR(500) NULL,
    `status` ENUM('ACTIVE', 'BANNED') NOT NULL DEFAULT 'ACTIVE',
    `email` VARCHAR(200) NOT NULL,
    `website` VARCHAR(500) NULL,
    `password` VARCHAR(200) NOT NULL,
    `role` ENUM('VIEWER', 'CONTRIBUTOR', 'ADMIN', 'SUPERADMIN') NOT NULL DEFAULT 'VIEWER',
    `createdAt` DATETIME(0) NOT NULL DEFAULT (now()),
    `updatedAt` DATETIME(3) NOT NULL,
    `updatedBy` INTEGER NULL,

    UNIQUE INDEX `slug`(`slug`),
    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `advertisement` ADD CONSTRAINT `advertisement_ibfk_1` FOREIGN KEY (`createdBy`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `advertisement` ADD CONSTRAINT `advertisement_ibfk_2` FOREIGN KEY (`updatedBy`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `category` ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`updatedBy`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `category` ADD CONSTRAINT `category_ibfk_2` FOREIGN KEY (`createdBy`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `post`(`postId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`createdBy`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `literary` ADD CONSTRAINT `literary_ibfk_1` FOREIGN KEY (`updatedBy`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `literary` ADD CONSTRAINT `literary_ibfk_2` FOREIGN KEY (`createdBy`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `literarycategory` ADD CONSTRAINT `literarycategory_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category`(`categoryId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `literarycategory` ADD CONSTRAINT `literarycategory_ibfk_2` FOREIGN KEY (`literaryId`) REFERENCES `literary`(`literaryId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`updatedBy`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_ibfk_2` FOREIGN KEY (`publishedBy`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_ibfk_3` FOREIGN KEY (`createdBy`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_ibfk_4` FOREIGN KEY (`literary`) REFERENCES `literary`(`literaryId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `postreaction` ADD CONSTRAINT `postreaction_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `post`(`postId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `postreaction` ADD CONSTRAINT `postreaction_ibfk_2` FOREIGN KEY (`createdBy`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `posttag` ADD CONSTRAINT `posttag_ibfk_1` FOREIGN KEY (`tagId`) REFERENCES `tag`(`tagId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `posttag` ADD CONSTRAINT `posttag_ibfk_2` FOREIGN KEY (`postId`) REFERENCES `post`(`postId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `setting` ADD CONSTRAINT `setting_ibfk_1` FOREIGN KEY (`updatedBy`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tag` ADD CONSTRAINT `tag_ibfk_1` FOREIGN KEY (`updatedBy`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tag` ADD CONSTRAINT `tag_ibfk_2` FOREIGN KEY (`createdBy`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
