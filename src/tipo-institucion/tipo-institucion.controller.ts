/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { TipoInstitucionService } from './tipo-institucion.service';
import { TipoInstitucionEntity } from './tipo-institucion.entity';
import { CreateTipoInstitucionDto } from './dto/create-tipo-inst.dto';
import { UpdateTipoInstitucionDto } from './dto/update-tipo-inst.dto';

@Controller('tipo-institucion')
export class TipoInstitucionController {

    constructor(private tipoInstitucionService: TipoInstitucionService) { }

    @Get(':id_tipo_institucion')
    getTipoInstById(@Param('id_tipo_institucion') id: number): Promise<TipoInstitucionEntity> {
        return this.tipoInstitucionService.getTipoInstById(id)
    }

    @Get()
    getTipoInstList(): Promise<TipoInstitucionEntity[]> {
        return this.tipoInstitucionService.getTipoInstList()
    }

    @Post()
    createTipoInst(@Body() nuevoTipoInst:CreateTipoInstitucionDto) {
        return this.tipoInstitucionService.createTipoInst(nuevoTipoInst)
    }

    @Delete(':id_tipo_institucion')
    deleteTipoInst(@Param('id_tipo_institucion') id:number){
        return this.tipoInstitucionService.deleteTipoInst(id)
    }

    @Patch(':id_tipo_institucion')
    updateTipoInst(@Param('id_tipo_institucion') id:number, @Body() tipoInst: UpdateTipoInstitucionDto) {
        return this.tipoInstitucionService.updateTipoInst(id, tipoInst)
    }

}
