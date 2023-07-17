/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SectorEntity } from './sector.entity';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';

@Injectable()
export class SectorService {

    constructor(
        @InjectRepository(SectorEntity)
        private sectorRepository: Repository<SectorEntity>
    ) {}

    async createSector(sector: CreateSectorDto) {
        const nuevoSector = this.sectorRepository.create(sector)
        return await this.sectorRepository.save(nuevoSector)
    }

    async getSectorList() {
        return await this.sectorRepository.find()
    }

    async getSectorById(id_sector: number) {
        return await this.sectorRepository.findOne({
            where:{
                id_sector
            }
        })
    }

    async deleteSector(id_sector: number) {
        return this.sectorRepository.delete({id_sector})
    }

    async updateSector(id_sector: number, catalogo: UpdateSectorDto) {
        this.sectorRepository.update({id_sector}, catalogo)
    }

}
