import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumoAguaModule } from './consumo_agua/consumo_agua.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://FabricioPontes:22798394@cluster0.cszjk.mongodb.net/nomeDoBanco?retryWrites=true&w=majority'),
    ConsumoAguaModule,
  ],
})
export class AppModule {}

