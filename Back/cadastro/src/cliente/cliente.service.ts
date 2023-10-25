import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export class ClienteService {
  constructor() {}

  async findAllClientes() {
    return prisma.cliente.findMany();
  }

  async findClienteById(id) {
    return prisma.cliente.findUnique({
      where: { id },
    });
  }

  async createCliente(data) {
    data.dataNascimento = new Date(2016, 2, 3).toISOString();
    return prisma.cliente.create({
      data,
    });
  }

  async updateCliente(id, data) {
    return prisma.cliente.update({
      where: { id },
      data,
    });
  }
  

  async deleteCliente(id) {
    return prisma.cliente.delete({
      where: { id },
    });
  }
}