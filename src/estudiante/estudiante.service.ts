/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstudianteEntity } from './estudiante.entity';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { TipoInstitucionService } from 'src/tipo-institucion/tipo-institucion.service';
import { SeccionService } from 'src/seccion/seccion.service';
import { EscuelaService } from 'src/escuela/escuela.service';
import { SectorService } from 'src/sector/sector.service';
import { ModalidadService } from 'src/modalidad/modalidad.service';

@Injectable()
export class EstudianteService {

    constructor(
        @InjectRepository(EstudianteEntity)
        private estudianteRepository: Repository<EstudianteEntity>,
        private tipoInstitucionService: TipoInstitucionService,
        private seccionService: SeccionService,
        private escuelaService: EscuelaService,
        private sectorService: SectorService,
        private modalidadService: ModalidadService
    ) {}

    async createEstudiante(estudiante: CreateEstudianteDto) {
        // Fk Tipo Institución
        const tipoInstFound = await this.tipoInstitucionService.getTipoInstById(estudiante.tipo_institucion)

        if (!tipoInstFound)
            return new HttpException('Tipo institucion del estudiante no encontrado', HttpStatus.NOT_FOUND)
        
        // Fk Seccion
        const seccionFound = await this.seccionService.getSecccionById(estudiante.seccion)

        if (!seccionFound)
            return new HttpException('Seccion del estudiante no encontrado', HttpStatus.NOT_FOUND)

        // Fk Escuela
        const escuelaFound = await this.escuelaService.getEscuelaById(estudiante.escuela)

        if (!escuelaFound)
            return new HttpException('Nivel de Escuela del estudiante no encontrado', HttpStatus.NOT_FOUND)

        // Fk Sector
        const sectorFound = await this.sectorService.getSectorById(estudiante.sector)

        if (!sectorFound)
            return new HttpException('Sector del estudiante no encontrado', HttpStatus.NOT_FOUND)

        // Fk Modalidad
        const modalidadFound = await this.modalidadService.getModalidadById(estudiante.modalidad)

        if (!modalidadFound)
            return new HttpException('Modalidad del estudiante no encontrado', HttpStatus.NOT_FOUND)

        const nuevoEstudiante = this.estudianteRepository.create(estudiante)
        return this.estudianteRepository.save(nuevoEstudiante)
    }

    async getEstudianteList() {
        return await this.estudianteRepository.find({
            relations: [
                'tipo_institucionId',
                'seccionId',
                'escuelaId',
                'sectorId',
                'modalidadId'
            ]
        })
    }

    async getEstudianteById(id_estudiante: number) {
        return await this.estudianteRepository.findOne({
            where: {
                id_estudiante
            },
            relations: [
                'tipo_institucionId',
                'seccionId',
                'escuelaId',
                'sectorId',
                'modalidadId'
            ]
        })
    }

    async deleteEstudiante(id_estudiante: number) {
        return this.estudianteRepository.delete({id_estudiante})
    }

    async updateEstudiante(id_estudiante: number, catalogo: UpdateEstudianteDto) {
        this.estudianteRepository.update({id_estudiante}, catalogo)
    }

}
