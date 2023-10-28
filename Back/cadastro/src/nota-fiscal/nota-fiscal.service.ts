import { PrismaClient } from '@prisma/client';
import { ClienteService } from 'src/cliente/cliente.service';

export class NotaFiscalService {
  private prisma: PrismaClient;
  private clienteService: ClienteService;



  constructor(prisma: PrismaClient, clienteService: ClienteService) {
    this.prisma = prisma;
    this.clienteService = clienteService;
  }



  async findAllNotasFiscais() {
    return this.prisma.notaFiscal.findMany();
  }



  async findNotaFiscalById(id: number) {
    if (id === null) {
      throw new Error('ID inválido!');
    }
  
    return this.prisma.notaFiscal.findUnique({
      where: { id },
    });
  }
  


  async createNotaFiscal(data: any) {
    if (!data.dataEmissao || isNaN(new Date(data.dataEmissao).getTime())) {
      throw new Error('Data de emissão inválida!');
    }
    return this.prisma.notaFiscal.create({
      data,
    });
  }


 async updateNotaFiscal(id: number, data: any) {
  if (id === null || typeof id !== 'number') {
    throw new Error('ID inválido!');
  }
  if (!data.dataEmissao || isNaN(new Date(data.dataEmissao).getTime())) {
    throw new Error('Data de emissão inválida!');
  }
  return this.prisma.notaFiscal.update({
    where: { id },
    data,
  });
}



async deleteNotaFiscal(id: number) {
  if (id === null || typeof id !== 'number') {
    throw new Error('ID inválido!');
  }
  const existingNotaFiscal = await this.prisma.notaFiscal.findUnique({
    where: { id },
  });

  if (!existingNotaFiscal) {
    throw new Error('Nota fiscal não encontrada.');
  }
  return this.prisma.notaFiscal.delete({
    where: { id },
  });
}
}
