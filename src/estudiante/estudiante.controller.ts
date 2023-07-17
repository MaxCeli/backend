/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteEntity } from './estudiante.entity';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Controller('estudiante')
export class EstudianteController {

    constructor(private estudianteService: EstudianteService) {}

    @Get(':id_estudiante')
    getEstudianteById(@Param('id_estudiante') id: number): Promise<EstudianteEntity> {
        return this.estudianteService.getEstudianteById(id)
    }

    @Get()
    getEstudianteList(): Promise<EstudianteEntity[]> {
        return this.estudianteService.getEstudianteList()
    }

    @Post()
    createEstudiante(@Body() nuevoEstudiante: CreateEstudianteDto) {
        return this.estudianteService.createEstudiante(nuevoEstudiante)
    }

    @Delete(':id_estudiante')
    deleteEstudiante(@Param('id_estudiante') id: number) {
        return this.estudianteService.deleteEstudiante(id)
    }

    @Patch(':id_estudiante')
    updateEstudiante(@Param('id_estudiante') id: number, @Body() estudiante: UpdateEstudianteDto) {
        return this.estudianteService.updateEstudiante(id, estudiante)
    }

}
