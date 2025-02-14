const CrearLibro = require('../../casos-de-uso/CrearLibro');
const ObtenerLibros = require('../../casos-de-uso/ObtenerLibros');

class LibroController {
  static async crear(req, res) {
    try {
      const { titulo, autorId } = req.body;
      if (!titulo || !autorId) return res.status(400).json({ error: "Título y autorId son requeridos" });
      const useCase = new CrearLibro();
      const libro = await useCase.execute(titulo, autorId);
      res.json(libro);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async listar(req, res) {
    try {
      const useCase = new ObtenerLibros();
      const libros = await useCase.execute();
      res.json(libros);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = LibroController;
