import { getClientes, addCliente } from '../models/clienteModels.js';

export const obtenerClientes = (req, res) => {
    getClientes((err, resultado) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(resultado);
    }); 
};
export const crearCliente = (req, res) => {
    const cliente = req.body;
    addCliente(cliente, (err, resultado) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ mensaje: 'cliente agregado', id: resultado.insertId });
    });
};