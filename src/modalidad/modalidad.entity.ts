/* eslint-disable prettier/prettier */
import { EstudianteEntity } from 'src/estudiante/estudiante.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

@Entity({name: 'modalidad'})
export class ModalidadEntity {

    @PrimaryGeneratedColumn()
    id_modalidad: number;

    @Column({ type: 'varchar' })
    nombre_modalidad: string;

    @OneToMany(() => EstudianteEntity, estudiante => estudiante.modalidadId)
    modalidadId: EstudianteEntity[];
    
}