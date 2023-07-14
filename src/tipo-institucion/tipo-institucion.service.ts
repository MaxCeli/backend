/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { TipoInstitucionEntity } from './tipo-institucion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipoInstitucionDto } from './dto/create-tipo-inst.dto';
import { UpdateTipoInstitucionDto } from './dto/update-tipo-inst.dto';

@Injectable()
export class TipoInstitucionService {
    constructor(
        @InjectRepository(TipoInstitucionEntity) 
        private tipoInstitucionRepository: Repository<TipoInstitucionEntity>
    ) {}

    async createTipoInst(tipoI: CreateTipoInstitucionDto) {
        const nuevoTipoI = this.tipoInstitucionRepository.create(tipoI);
        return await this.tipoInstitucionRepository.save(nuevoTipoI);
    }

    async getTipoInstList() {
        return await this.tipoInstitucionRepository.find();
    }

    async getTipoInstById(id_tipo_institucion: number) {
        return await this.tipoInstitucionRepository.findOne({
            where: {
                id_tipo_institucion
            }
        })
    }
    
    async deleteTipoInst(id_tipo_institucion: number){
        return this.tipoInstitucionRepository.delete({id_tipo_institucion});
    }

    async updateTipoInst(id_tipo_institucion: number, catalogo: UpdateTipoInstitucionDto){
        this.tipoInstitucionRepository.update({id_tipo_institucion}, catalogo);
    }

}
