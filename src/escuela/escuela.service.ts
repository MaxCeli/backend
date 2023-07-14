/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EscuelaEntity } from './escuela.entity';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';

@Injectable()
export class EscuelaService {

    constructor(
        @InjectRepository(EscuelaEntity)
        private escuelaRepository: Repository<EscuelaEntity>
    ) {}

    async createEscuela(escuela: CreateEscuelaDto) {
        const nuevoEscuela = this.escuelaRepository.create(escuela)
        return await this.escuelaRepository.save(nuevoEscuela)
    }

    async getEscuelaList() {
        return await this.escuelaRepository.find()
    }

    async getEscuelaById(id_escuela: number) {
        return await this.escuelaRepository.findOne({
            where:{
                id_escuela
            }
        })
    }

    async deleteEscuelaById(id_escuela: number) {
        return this.escuelaRepository.delete({id_escuela})
    }

    async updateEscuela(id_escuela: number, catalogo: UpdateEscuelaDto) {
        return this.escuelaRepository.update({id_escuela}, catalogo)
    }

}
