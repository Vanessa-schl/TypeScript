import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('vane_paises_novo')
export class paises {
    @PrimaryGeneratedColumn({name: 'pais_id'})
    paisId: number;

    @Column({type: 'varchar2',name: 'nome_pais', nullable: false})
    nomePais: string;

}

