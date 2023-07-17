/* eslint-disable prettier/prettier */
import { EstudianteEntity } from 'src/estudiante/estudiante.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

@Entity({name: 'sector'})
export class SectorEntity{

    @PrimaryGeneratedColumn()
    id_sector: number;

    @Column({ type: 'varchar' })
    nombre_sector: string;

    @OneToMany(() => EstudianteEntity, estudiante => estudiante.sectorId)
    sectorId: EstudianteEntity[];

}