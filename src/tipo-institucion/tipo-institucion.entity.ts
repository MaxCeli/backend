/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'tipoInstitucion'})
export class TipoInstitucionEntity {

    @PrimaryGeneratedColumn()
    id_tipo_institucion: number;

    @Column({ type: 'varchar' })
    nombre_tipo_institucion: string;

}