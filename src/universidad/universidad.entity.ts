/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'universidad'})
export class UniversidadEntity{

    @PrimaryGeneratedColumn()
    id_universidad: number;

    @Column({ type: 'varchar' })
    nivel_universidad: string;

}