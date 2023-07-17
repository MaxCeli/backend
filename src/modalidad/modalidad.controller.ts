/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ModalidadService } from './modalidad.service';
import { ModalidadEntity } from './modalidad.entity';
import { CreateModalidadDto } from './dto/create-modalidad.dto';
import { UpdateModalidadDto } from './dto/update-modalidad.dto';

@Controller('modalidad')
export class ModalidadController {

    constructor(private modadlidadService: ModalidadService) {}

    @Get(':id_modalidad')
    getModalidadById(@Param('id_modalidad') id: number): Promise<ModalidadEntity> {
        return this.modadlidadService.getModalidadById(id)
    }

    @Get()
    getModalidadList(): Promise<ModalidadEntity[]> {
        return this.modadlidadService.getModalidadList()
    }

    @Post()
    createModalidad(@Body() nuevoModel: CreateModalidadDto) {
        return this.modadlidadService.createModalidad(nuevoModel)
    }

    @Delete(':id_modalidad')
    deleteModalidad(@Param('id_modalidad') id: number) {
        return this.modadlidadService.deleteModalidad(id)
    }

    @Patch(':id_modalidad')
    updateModalidad(@Param('id_modalidad') id: number, @Body() modalidad: UpdateModalidadDto) {
        return this.modadlidadService.updateModalidad(id, modalidad)
    }

}
