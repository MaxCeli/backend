/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'seccion'})
export class SeccionEntity {

    @PrimaryGeneratedColumn()
    id_seccion: number;

    @Column({ type: 'varchar' })
    nombre_seccion: string;

}