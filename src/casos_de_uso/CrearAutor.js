const { prisma } = require('../infraestructura/config/database');

class CrearAutor {
  async execute(nombre) {
    return await prisma.autor.create({ data: { nombre } });
  }
}

module.exports = CrearAutor;
