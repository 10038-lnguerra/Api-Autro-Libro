const CrearAutor = require('../../casos-de-uso/CrearAutor');
const ObtenerAutores = require('../../casos-de-uso/ObtenerAutores');

class AutorController {
  static async crear(req, res) {
    try {
      const { nombre } = req.body;
      if (!nombre) return res.status(400).json({ error: "El nombre es requerido" });
      const useCase = new CrearAutor();
      const autor = await useCase.execute(nombre);
      res.json(autor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async listar(req, res) {
    try {
      const useCase = new ObtenerAutores();
      const autores = await useCase.execute();
      res.json(autores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AutorController;
