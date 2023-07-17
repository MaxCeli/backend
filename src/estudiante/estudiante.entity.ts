/* eslint-disable prettier/prettier */
import { EscuelaEntity } from "src/escuela/escuela.entity";
import { ModalidadEntity } from "src/modalidad/modalidad.entity";
import { SeccionEntity } from "src/seccion/seccion.entity";
import { SectorEntity } from "src/sector/sector.entity";
import { TipoInstitucionEntity } from "src/tipo-institucion/tipo-institucion.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'estudiante' })
export class EstudianteEntity {

    @PrimaryGeneratedColumn()
    id_estudiante: number;

    @Column({ type: 'varchar' })
    nombre_estudiante: string;

    @Column({ type: 'varchar' })
    cedula_estudiante: string;

    @Column({ type: 'varchar' })
    email_estudiante: string;

    @Column({ type: 'varchar' })
    edad_estudiante: number;

    @Column({ type: 'varchar' })
    nombre_representante: string;

    @Column({ type: 'varchar' })
    cedula_representante: string;

    @Column({ type: 'varchar' })
    email_representante: string;

    @Column({ type: 'varchar' })
    numero_contacto: string;

    @Column({ type: 'varchar' })
    institucion: string;

    @ManyToOne(() => TipoInstitucionEntity, { nullable: false})
    @JoinColumn({ name: 'tipo_institucion' })
    tipo_institucionId: TipoInstitucionEntity;

    @ManyToOne(() => SeccionEntity, { nullable: false})
    @JoinColumn({ name: 'seccion' })
    seccionId: SeccionEntity;

    @Column({ type: 'varchar' })
    nivelacion_materia: string;

    @ManyToOne(() => EscuelaEntity, { nullable: false})
    @JoinColumn({ name: 'escuela' })
    escuelaId: EscuelaEntity;

    @Column({ type: 'varchar' })
    ciudad: string;

    @ManyToOne(() => SectorEntity, { nullable: false})
    @JoinColumn({ name: 'sector' })
    sectorId: SectorEntity;

    @Column({ type: 'varchar' })
    direccion: string;

    @ManyToOne(() => ModalidadEntity, { nullable: false})
    @JoinColumn({ name: 'modalidad' })
    modalidadId: ModalidadEntity;

}