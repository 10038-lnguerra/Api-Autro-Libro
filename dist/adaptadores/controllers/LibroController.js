"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibroController = void 0;
const CrearLibro_1 = require("../../casos-de-uso/CrearLibro");
const ObtenerLibros_1 = require("../../casos-de-uso/ObtenerLibros");
class LibroController {
    static crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, autorId } = req.body;
            const useCase = new CrearLibro_1.CrearLibro();
            const libro = yield useCase.execute(titulo, autorId);
            res.json(libro);
        });
    }
    static listar(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const useCase = new ObtenerLibros_1.ObtenerLibros();
            const libros = yield useCase.execute();
            res.json(libros);
        });
    }
}
exports.LibroController = LibroController;
