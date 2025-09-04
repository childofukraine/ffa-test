import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRequestsTable1756896042772 implements MigrationInterface {
  name = 'CreateRequestsTable1756896042772';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "requests" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "status" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0428f484e96f9e6a55955f29b5f" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "requests"`);
  }
}
