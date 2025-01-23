// src/components/Module7.js
import React from 'react';
//import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const temasCubiertos = [
  'Introducción a React',
  'Componentes y Props',
  'Estado y Ciclo de Vida',
  'Manejo de Eventos',
  'Renderizado Condicional',
  'Listas y Keys',
  'Formularios',
  'Elevando el Estado',
  'Composición vs Herencia',
  'Pensando en React'
];

const LandingPage = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Modelo 7: desarrollo frontend con REACT.JS
      </Typography>

      <Typography variant="h5" gutterBottom>
        Bienvenido
      </Typography>
      <Typography variant="body1" paragraph>
        Bienvenido al módulo 7 del curso de desarrollo frontend con REACT.JS. Aquí exploraremos los aspectos fundamentales y avanzados de React para ayudarte a construir interfaces de usuario dinámicas y eficaces.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Temas Cubiertos
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tema</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {temasCubiertos.map((tema, index) => (
              <TableRow key={index}>
                <TableCell>{tema}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" gutterBottom>
        Recursos Adicionales
      </Typography>
      <Typography variant="body1" paragraph>
        Aquí encontrarás recursos adicionales para profundizar en los temas cubiertos en este módulo. Estos recursos incluyen documentación oficial, tutoriales en línea, y proyectos de ejemplo.
      </Typography>
    </div>
  );
};

export default LandingPage;
