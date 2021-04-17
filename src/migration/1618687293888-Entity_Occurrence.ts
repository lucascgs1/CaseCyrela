import {MigrationInterface, QueryRunner} from "typeorm";

export class EntityOccurrence1618687293888 implements MigrationInterface {
    name = 'EntityOccurrence1618687293888'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "occurrence" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "ticketnumber" integer NOT NULL, "pjo_clientedaunidade" character varying NOT NULL, "pjo_empreendimentoid" character varying NOT NULL, "pjo_bloco" character varying NOT NULL, "pjo_unidade" character varying NOT NULL, "pjo_bandeira" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_db678abc0d87805e345ee35279a" PRIMARY KEY ("id")); COMMENT ON COLUMN "occurrence"."ticketnumber" IS 'numero da ocorrencia'; COMMENT ON COLUMN "occurrence"."pjo_clientedaunidade" IS 'cliente da unidade'; COMMENT ON COLUMN "occurrence"."pjo_empreendimentoid" IS 'empreendimento'; COMMENT ON COLUMN "occurrence"."pjo_bloco" IS 'bloco'; COMMENT ON COLUMN "occurrence"."pjo_unidade" IS 'unidade'; COMMENT ON COLUMN "occurrence"."pjo_bandeira" IS 'bandeira'; COMMENT ON COLUMN "occurrence"."description" IS 'descricao'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "occurrence"`);
    }

}
