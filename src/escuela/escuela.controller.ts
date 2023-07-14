/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { EscuelaService } from './escuela.service';
import { EscuelaEntity } from './escuela.entity';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';

@Controller('escuela')
export class EscuelaController {

    constructor(private escuelaService:EscuelaService) {}

    @Get(':id_escuela')
    getEscuelaById(@Param('id_escuela') id: number): Promise<EscuelaEntity> {
        return this.escuelaService.getEscuelaById(id)
    }

    @Get()
    getEscuelaList(): Promise<EscuelaEntity[]>  {
        return this.escuelaService.getEscuelaList()
    }

    @Post()
    createEscuela(@Body() nuevoEscuela: CreateEscuelaDto) {
        return this.escuelaService.createEscuela(nuevoEscuela)
    }

    @Delete(':id_escuela')
    deleteEscuela(@Param('id_escuela') id: number){
        return this.escuelaService.deleteEscuelaById(id)
    }

    @Patch(':id_escuela')
    updateEscuela(@Param('id_escuela') id: number, @Body() escuela: UpdateEscuelaDto){
        return this.escuelaService.updateEscuela(id, escuela)
    }

}
