"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const AutorController_1 = require("../adaptadores/controllers/AutorController");
const LibroController_1 = require("../adaptadores/controllers/LibroController");
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
// Rutas
app.post('/autores', AutorController_1.AutorController.crear);
app.get('/autores', AutorController_1.AutorController.listar);
app.post('/libros', LibroController_1.LibroController.crear);
app.get('/libros', LibroController_1.LibroController.listar);
