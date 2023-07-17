/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ColegioService } from './colegio.service';
import { ColegioEntity } from './colegio.entity';
import { CreateColegioDto } from './dto/create-colegio.dto';
import { UpdateColegioDto } from './dto/update-colegio.dto';

@Controller('colegio')
export class ColegioController {

    constructor(private colegioService:ColegioService) {}

    @Get(':id_colegio')
    getEscuelaById(@Param('id_colegio') id: number): Promise<ColegioEntity> {
        return this.colegioService.getColegioById(id)
    }

    @Get()
    getColegioList(): Promise<ColegioEntity[]>  {
        return this.colegioService.getColegioList()
    }

    @Post()
    createColegio(@Body() nuevoColegio: CreateColegioDto) {
        return this.colegioService.createColegio(nuevoColegio)
    }

    @Delete(':id_colegio')
    deleteEscuela(@Param('id_colegio') id: number){
        return this.colegioService.deleteColegioById(id)
    }

    @Patch(':id_colegio')
    updateColegio(@Param('id_colegio') id: number, @Body() colegio: UpdateColegioDto){
        return this.colegioService.updateColegio(id, colegio)
    }

}