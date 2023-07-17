/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ColegioEntity } from './colegio.entity';
import { CreateColegioDto } from './dto/create-colegio.dto';
import { UpdateColegioDto } from './dto/update-colegio.dto';

@Injectable()
export class ColegioService {

    constructor(
        @InjectRepository(ColegioEntity)
        private colegioRepository: Repository<ColegioEntity>
    ) {}

    async createColegio(colegio: CreateColegioDto) {
        const nuevoColegio = this.colegioRepository.create(colegio)
        return await this.colegioRepository.save(nuevoColegio)
    }

    async getColegioList() {
        return await this.colegioRepository.find()
    }

    async getColegioById(id_colegio: number) {
        return await this.colegioRepository.findOne({
            where:{
                id_colegio
            }
        })
    }

    async deleteColegioById(id_colegio: number) {
        return this.colegioRepository.delete({id_colegio})
    }

    async updateColegio(id_colegio: number, catalogo: UpdateColegioDto) {
        return this.colegioRepository.update({id_colegio}, catalogo)
    }

}
