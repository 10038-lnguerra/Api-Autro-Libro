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
exports.AutorController = void 0;
const CrearAutor_1 = require("../../casos-de-uso/CrearAutor");
const ObtenerAutores_1 = require("../../casos-de-uso/ObtenerAutores");
class AutorController {
    static crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.body;
            const useCase = new CrearAutor_1.CrearAutor();
            const autor = yield useCase.execute(nombre);
            res.json(autor);
        });
    }
    static listar(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const useCase = new ObtenerAutores_1.ObtenerAutores();
            const autores = yield useCase.execute();
            res.json(autores);
        });
    }
}
exports.AutorController = AutorController;
