/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'sector'})
export class SectorEntity{

    @PrimaryGeneratedColumn()
    id_sector: number;

    @Column({ type: 'varchar' })
    nombre_sector: string;

}