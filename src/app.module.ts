/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config/constants';
import { TipoInstitucionModule } from './tipo-institucion/tipo-institucion.module';
import { SeccionModule } from './seccion/seccion.module';
import { EscuelaModule } from './escuela/escuela.module';
import { SectorModule } from './sector/sector.module';
import { ModalidadModule } from './modalidad/modalidad.module';
import { EstudianteModule } from './estudiante/estudiante.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mariadb',
        host: configService.get<string>(DB_HOST),
        port: +configService.get<number>(DB_PORT),
        username: configService.get<string>(DB_USER),
        password: configService.get<string>(DB_PASSWORD),
        database: configService.get<string>(DB_DATABASE),
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
        retryDelay: 3000,
        retryAttempts: 10,
      }),
      inject: [ConfigService],
    }),
    TipoInstitucionModule,
    SeccionModule,
    EscuelaModule,
    SectorModule,
    ModalidadModule,
    EstudianteModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
