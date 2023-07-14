/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'modalidad'})
export class ModalidadEntity {

    @PrimaryGeneratedColumn()
    id_modalidad: number;

    @Column({ type: 'varchar' })
    nombre_modalidad: string;
    
}