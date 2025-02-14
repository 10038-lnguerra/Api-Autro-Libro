const { prisma } = require('../infraestructura/config/database');

class CrearLibro {
  async execute(titulo, autorId) {
    return await prisma.libro.create({ data: { titulo, autorId } });
  }
}

module.exports = CrearLibro;
