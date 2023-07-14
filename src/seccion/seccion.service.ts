/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { SeccionEntity } from './seccion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSeccionDto } from './dto/create-seccion.dto';
import { UpdateSeccionDto } from './dto/update-seccion.dto';

@Injectable()
export class SeccionService {

    constructor(
        @InjectRepository(SeccionEntity)
        private seccionRepository: Repository<SeccionEntity>
    ) {}

    async createSeccion(seccion: CreateSeccionDto) {
        const nuevoSeccion = this.seccionRepository.create(seccion)
        return await this.seccionRepository.save(nuevoSeccion)
    }

    async getSeccionList() {
        return await this.seccionRepository.find()
    }

    async getSecccionById(id_seccion: number) {
        return await this.seccionRepository.findOne({
            where: {
                id_seccion
            }
        })
    }

    async deleteSeccion(id_seccion: number) {
        return this.seccionRepository.delete({id_seccion})
    }

    async updateSeccion(id_seccion: number, catalogo: UpdateSeccionDto) {
        this.seccionRepository.update({id_seccion}, catalogo)
    }

}
