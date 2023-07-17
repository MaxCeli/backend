/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UniversidadEntity } from './universidad.entity';
import { CreateUniversidadDto } from './dto/create-universidad.dto';
import { UpdateUniversidadDto } from './dto/update-universidad.dto';

@Injectable()
export class UniversidadService {

    constructor(
        @InjectRepository(UniversidadEntity)
        private universidadRepository: Repository<UniversidadEntity>
    ) {}

    async createUniversidad(universidad: CreateUniversidadDto) {
        const nuevoUniversidad = this.universidadRepository.create(universidad)
        return await this.universidadRepository.save(nuevoUniversidad)
    }

    async getUniversidadList() {
        return await this.universidadRepository.find()
    }

    async getUniversidadById(id_universidad: number) {
        return await this.universidadRepository.findOne({
            where:{
                id_universidad
            }
        })
    }

    async deleteUniversidadById(id_universidad: number) {
        return this.universidadRepository.delete({id_universidad})
    }

    async updateUniversidad(id_universidad: number, catalogo: UpdateUniversidadDto) {
        return this.universidadRepository.update({id_universidad}, catalogo)
    }

}
