/* eslint-disable prettier/prettier */
import { EstudianteEntity } from 'src/estudiante/estudiante.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

@Entity({name: 'escuela'})
export class EscuelaEntity{

    @PrimaryGeneratedColumn()
    id_escuela: number;

    @Column({ type: 'varchar' })
    nivel_escuela: string;

    @OneToMany(() => EstudianteEntity, estudiante => estudiante.escuelaId)
    escuelaId: EstudianteEntity[];

}