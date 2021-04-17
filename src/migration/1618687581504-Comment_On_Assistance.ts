import {MigrationInterface, QueryRunner} from "typeorm";

export class CommentOnAssistance1618687581504 implements MigrationInterface {
    name = 'CommentOnAssistance1618687581504'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "assistance"."actualstart" IS 'data de inicio'`);
        await queryRunner.query(`COMMENT ON COLUMN "assistance"."actualend" IS 'data de termino'`);
        await queryRunner.query(`COMMENT ON COLUMN "assistance"."subject" IS 'assunto'`);
        await queryRunner.query(`COMMENT ON COLUMN "assistance"."pjo_tipodeatividade" IS 'tipo de atividade'`);
        await queryRunner.query(`COMMENT ON COLUMN "assistance"."pjo_empreendimentoid" IS 'empreendimento'`);
        await queryRunner.query(`COMMENT ON COLUMN "assistance"."pjo_blocoid" IS 'bloco'`);
        await queryRunner.query(`COMMENT ON COLUMN "assistance"."pjo_unidadeid" IS 'unidade'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "assistance"."pjo_unidadeid" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "assistance"."pjo_blocoid" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "assistance"."pjo_empreendimentoid" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "assistance"."pjo_tipodeatividade" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "assistance"."subject" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "assistance"."actualend" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "assistance"."actualstart" IS NULL`);
    }

}
