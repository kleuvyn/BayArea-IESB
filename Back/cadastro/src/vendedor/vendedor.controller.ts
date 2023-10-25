import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { VendedorService } from './vendedor.service'; // Importe o serviço de Vendedor apropriado
import { Vendedor } from '@prisma/client'; // Importe a entidade Vendedor apropriada

@Controller('vendedor') // Altere a rota para 'vendedor'
export class VendedorController {
  constructor(private readonly vendedorService: VendedorService) {}

  @Get()
  async findAll(): Promise<Vendedor[]> {
    return this.vendedorService.findAll(); // Atualize o nome do método do serviço para findAll
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Vendedor> {
    return this.vendedorService.findOne(parseInt(id, 10)); // Atualize o nome do método do serviço para findOne
  }

  @Post()
  async create(@Body() vendedorData: Vendedor): Promise<Vendedor> {
    return this.vendedorService.create(vendedorData); // Atualize o nome do método do serviço para create
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() vendedorData: Vendedor): Promise<Vendedor> {
    return this.vendedorService.update(parseInt(id, 10), vendedorData); // Atualize o nome do método do serviço para update
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    this.vendedorService.remove(parseInt(id, 10)); // Atualize o nome do método do serviço para remove
  }
}
