import { Entity, Column, PrimaryColumn, Generated } from "typeorm";

@Entity()
export class Assistance {
    @PrimaryColumn("string")
    @Generated("uuid")
    id: number;

    @Column({ comment: "data de inicio" })
    actualstart: Date;

    @Column({ comment: "data de termino" })
    actualend: Date;

    @Column({ comment: "assunto" })
    subject: string;

    @Column({ comment: "tipo de atividade" })
    pjo_tipodeatividade: string; // talvez um enum

    @Column({ comment: "empreendimento" })
    pjo_empreendimentoid: string; // talvez um guid

    @Column({ comment: "bloco" })
    pjo_blocoid: string; // talvez um guid

    @Column({ comment: "unidade" })
    pjo_unidadeid: string; // talvez um guid

}
