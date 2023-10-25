import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class NotaFiscalService {
  constructor() {}

  async findAllNotasFiscais() {
    return prisma.notaFiscal.findMany();
  }

  async findNotaFiscalById(id: number) {
    return prisma.notaFiscal.findUnique({
      where: { id },
    });
  }

  async createNotaFiscal(data: any) {
    data.dataEmissao = new Date(2016, 2, 3).toISOString();

    return prisma.notaFiscal.create({
      data,
    });
  }

  async updateNotaFiscal(id: number, data: any) {
    return prisma.notaFiscal.update({
      where: { id },
      data,
    });
  }

  async deleteNotaFiscal(id: number) {
    return prisma.notaFiscal.delete({
      where: { id },
    });
  }
}
