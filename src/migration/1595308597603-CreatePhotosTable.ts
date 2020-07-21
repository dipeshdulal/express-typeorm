import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePhotosTable1595308597603 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE photo (
            id int NOT NULL AUTO_INCREMENT,
            name varchar(255) NOT NULL,
            description varchar(255) NOT NULL,
            filename varchar(255) NOT NULL,
            views varchar(255) NOT NULL,
            ispublished varchar(255) NOT NULL,
            PRIMARY KEY (id)
          )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE photo`);
  }
}
