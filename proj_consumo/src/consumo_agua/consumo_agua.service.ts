import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConsumoAgua } from './consumo_agua.model';

@Injectable()
export class ConsumoAguaService {
  constructor(@InjectModel('ConsumoAgua') private readonly consumoModel: Model<ConsumoAgua>) {}

  async registrarConsumo(consumoData: { userId: string; quantidade: number; data: Date }) {
    const novoConsumo = new this.consumoModel(consumoData);
    return novoConsumo.save();
  }

  async obterHistorico(userId: string, dataInicial: Date, dataFinal: Date) {
    return this.consumoModel.find({
      userId,
      data: { $gte: dataInicial, $lte: dataFinal },
    }).exec();
  }

  async verificarAlertas(userId: string) {
    // Lógica para comparar os consumos mensais
  }
}
