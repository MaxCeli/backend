/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { SeccionService } from './seccion.service';
import { SeccionEntity } from './seccion.entity';
import { CreateSeccionDto } from './dto/create-seccion.dto';
import { UpdateSeccionDto } from './dto/update-seccion.dto';

@Controller('seccion')
export class SeccionController {

    constructor(private seccionService: SeccionService) {}

    @Get(':id_seccion')
    getSeccionById(@Param('id_seccion') id: number): Promise<SeccionEntity> {
        return this.seccionService.getSecccionById(id)
    }

    @Get()
    getSeccionList(): Promise<SeccionEntity[]> {
        return this.seccionService.getSeccionList()
    }

    @Post()
    createSeccion(@Body() nuevoSeccion: CreateSeccionDto) {
        return this.seccionService.createSeccion(nuevoSeccion)
    }

    @Delete(':id_seccion')
    deleteSeccion(@Param('id_seccion') id: number){
        return this.seccionService.deleteSeccion(id)
    }

    @Patch(':id_seccion')
    updateSeccion(@Param('id_seccion') id: number, @Body() seccion: UpdateSeccionDto){
        return this.seccionService.updateSeccion(id, seccion)
    }

}
