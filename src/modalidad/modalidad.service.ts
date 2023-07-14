/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ModalidadEntity } from './modalidad.entity';
import { CreateModalidadDto } from './dto/create-modalidad.dto';
import { UpdateModalidadDto } from './dto/update-modalidad.dto';

@Injectable()
export class ModalidadService {

    constructor(
        @InjectRepository(ModalidadEntity)
        private modalidadRepository: Repository<ModalidadEntity>
    ) {}

    async createModalidad(moda: CreateModalidadDto) {
        const nuevaModalidad = this.modalidadRepository.create(moda)
        return await this.modalidadRepository.save(nuevaModalidad)
    }

    async getModalidadList() {
        return await this.modalidadRepository.find()
    }

    async getModalidadById(id_modalidad: number) {
        return await this.modalidadRepository.findOne({
            where: {
                id_modalidad
            }
        })
    }

    async deleteModalidad(id_modalidad: number) {
        return this.modalidadRepository.delete({id_modalidad})
    }

    async updateModalidad(id_modalidad: number, catalogo: UpdateModalidadDto) {
        this.modalidadRepository.update({id_modalidad}, catalogo)
    }

}
