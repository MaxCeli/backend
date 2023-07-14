/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'escuela'})
export class EscuelaEntity{

    @PrimaryGeneratedColumn()
    id_escuela: number;

    @Column({ type: 'varchar' })
    nivel_escuela: string;

}