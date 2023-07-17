/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'colegio'})
export class ColegioEntity{

    @PrimaryGeneratedColumn()
    id_colegio: number;

    @Column({ type: 'varchar' })
    nivel_colegio: string;

}