/* eslint-disable prettier/prettier */
import { EstudianteEntity } from 'src/estudiante/estudiante.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

@Entity({name: 'tipoInstitucion'})
export class TipoInstitucionEntity {

    @PrimaryGeneratedColumn()
    id_tipo_institucion: number;

    @Column({ type: 'varchar' })
    nombre_tipo_institucion: string;

    @OneToMany(() => EstudianteEntity, estudiante => estudiante.tipo_institucionId)
    tipoInstitucionId: EstudianteEntity[];

}