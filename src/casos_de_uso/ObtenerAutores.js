const { prisma } = require('../infraestructura/config/database');

class ObtenerAutores {
  async execute() {
    return await prisma.autor.findMany();
  }
}

module.exports = ObtenerAutores;
