const { prisma } = require('../infraestructura/config/database');

class ObtenerLibros {
  async execute() {
    return await prisma.libro.findMany({ include: { autor: true } });
  }
}

module.exports = ObtenerLibros;
