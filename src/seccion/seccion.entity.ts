/* eslint-disable prettier/prettier */
import { EstudianteEntity } from 'src/estudiante/estudiante.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

@Entity({name: 'seccion'})
export class SeccionEntity {

    @PrimaryGeneratedColumn()
    id_seccion: number;

    @Column({ type: 'varchar' })
    nombre_seccion: string;

    @OneToMany(() => EstudianteEntity, estudiante => estudiante.seccionId)
    seccionId: EstudianteEntity[];

}