import {MigrationInterface, QueryRunner} from "typeorm";

export class EntityAssistance1618686479580 implements MigrationInterface {
    name = 'EntityAssistance1618686479580'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "assistance" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "actualstart" TIMESTAMP NOT NULL, "actualend" TIMESTAMP NOT NULL, "subject" character varying NOT NULL, "pjo_tipodeatividade" character varying NOT NULL, "pjo_empreendimentoid" character varying NOT NULL, "pjo_blocoid" character varying NOT NULL, "pjo_unidadeid" character varying NOT NULL, CONSTRAINT "PK_e6ad228f6db856028050d62cd15" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "assistance"`);
    }

}
