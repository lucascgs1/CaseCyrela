import { Entity, Column, PrimaryColumn, Generated } from "typeorm";

@Entity()
export class Assistance {
    @PrimaryColumn("string")
    @Generated("uuid")
    id: number;

    @Column()
    actualstart: Date;

    @Column()
    actualend: Date;

    @Column()
    subject: string;

    @Column()
    pjo_tipodeatividade: string; // talvez um enum

    @Column()
    pjo_empreendimentoid: string; // talvez um guid

    @Column()
    pjo_blocoid: string; // talvez um guid

    @Column()
    pjo_unidadeid: string; // talvez um guid

}
