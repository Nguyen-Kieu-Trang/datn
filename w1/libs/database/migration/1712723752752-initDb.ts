import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDb1712723752752 implements MigrationInterface {
    name = 'InitDb1712723752752'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`gender\` varchar(255) NOT NULL, \`dateOfBirth\` varchar(255) NOT NULL, \`role\` int NOT NULL, \`major\` varchar(255) NOT NULL, \`pathFileCV\` varchar(255) NOT NULL, \`avatarUrl\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`company\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`website\` varchar(255) NOT NULL, \`contact\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`desription\` varchar(255) NOT NULL, \`avatarUrl\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`recruiment\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`position\` varchar(255) NOT NULL, \`experience\` varchar(255) NOT NULL, \`majorRelation\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`salary\` varchar(255) NOT NULL, \`companyId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`apply\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`status\` varchar(255) NOT NULL, \`recruimentId\` int NOT NULL, \`userId\` int NOT NULL, \`type\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`recruiment\` ADD CONSTRAINT \`FK_accce7ff898c941c4d01b60e93b\` FOREIGN KEY (\`companyId\`) REFERENCES \`company\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`apply\` ADD CONSTRAINT \`FK_359c8244808809db5ee96ed066e\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`apply\` ADD CONSTRAINT \`FK_9141bc8e00442224d98c661dda8\` FOREIGN KEY (\`recruimentId\`) REFERENCES \`recruiment\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`apply\` DROP FOREIGN KEY \`FK_9141bc8e00442224d98c661dda8\``);
        await queryRunner.query(`ALTER TABLE \`apply\` DROP FOREIGN KEY \`FK_359c8244808809db5ee96ed066e\``);
        await queryRunner.query(`ALTER TABLE \`recruiment\` DROP FOREIGN KEY \`FK_accce7ff898c941c4d01b60e93b\``);
        await queryRunner.query(`DROP TABLE \`apply\``);
        await queryRunner.query(`DROP TABLE \`recruiment\``);
        await queryRunner.query(`DROP TABLE \`company\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
