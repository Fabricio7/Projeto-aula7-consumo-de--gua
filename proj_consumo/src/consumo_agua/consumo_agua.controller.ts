import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ConsumoAguaService } from './consumo_agua.service';

@Controller('consumo-agua')
export class ConsumoAguaController {
  constructor(private readonly consumoService: ConsumoAguaService) {}

  @Post('registrar')
  async registrarConsumo(@Body() consumoData: { userId: string; quantidade: number; data: Date }) {
    console.log('Dados recebidos:', consumoData);
    return this.consumoService.registrarConsumo(consumoData);
  }

  @Get('historico')
  async obterHistorico(
    @Query('userId') userId: string,
    @Query('dataInicial') dataInicial: Date,
    @Query('dataFinal') dataFinal: Date,
  ) {
    return this.consumoService.obterHistorico(userId, new Date(dataInicial), new Date(dataFinal));
  }

  @Get('alertas')
  async verificarAlertas(@Query('userId') userId: string) {
    return this.consumoService.verificarAlertas(userId);
  }
}

