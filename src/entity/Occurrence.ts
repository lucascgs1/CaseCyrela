import { Entity, Column, PrimaryColumn, Generated } from "typeorm";

@Entity()
export class Occurrence {
    @PrimaryColumn("string")
    @Generated("uuid")
    id: number;

    @Column({ comment: "numero da ocorrencia" })
    ticketnumber: number;

    @Column({ comment: "cliente da unidade" })
    pjo_clientedaunidade: string;

    @Column({ comment: "empreendimento" })
    pjo_empreendimentoid: string;

    @Column({ comment: "bloco" })
    pjo_bloco: string

    @Column({ comment: "unidade" })
    pjo_unidade: string;

    @Column({ comment: "bandeira" })
    pjo_bandeira: string;

    @Column({ comment: "descricao" })
    description: string;
}

