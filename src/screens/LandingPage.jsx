// src/components/Module7.js
import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

const temasCubiertos = [
  'Componentes funcionales y de clase',
  'Uso de React hooks como useState y useEffect',
  'Creación de custom hooks como useForm',
  'Gestión de variables de estado con useState',
  'Gestión de estado global con Redux',
  'Integración de Redux con React',
  'Manejo de Formularios en React',
  'Publicando nuestra Pagina con GitHub Pages'
];

const LandingPage = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Modulo 7: DESARROLLO FRONTEND CON REACT.JS
      </Typography>

<Typography align="left" variant="h5" gutterBottom>
        Bienvenido:
      </Typography>
      <Typography align="left" variant="body1" paragraph>
        Este módulo se centra en el uso de React, incluyendo la creación de componentes, el manejo de hooks, y el uso de Redux.
      </Typography>

      

      <Typography align="left" variant="h5" gutterBottom>
        Temas Cubiertos
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              {temasCubiertos.map((tema, index) => (
                <TableCell key={index}>{tema}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography align="left" variant="h5" gutterBottom>
        Recursos Adicionales
      </Typography>
      <Typography align="left" variant="body1" paragraph>
        Para profundizar en los temas cubiertos, consulta los siguientes recursos:.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
      © 2024 Modulo 7. USIP
      </Typography>
    </div>
  );
};

export default LandingPage;
