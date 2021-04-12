const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//app.use(express.bodyParser());

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const pacientes = [];

const mountRoutes = require('./routers');

mountRoutes(app);

app.get('/consultar', (req, res) => {
  res.send(pacientes);
});

app.put('/guardar', (req, res) => {
  adicionapaciente(req.body);
  res.send('GUARDADO OK !!!');
});

app.delete('/borrar', (req, res) => {
  borrapaciente(req.body.id);
  res.send('BORRADO OK !!!');
});

app.post('/actualizadatos', (req, res) => {
  actualizapaciente(req.body);
  res.send('ACTUALIZADO OK !!!');
});

const adicionapaciente = (paciente) => {
  pacientes.push(paciente);
  return paciente;
};

const borrapaciente = (id) => {
  const index = pacientes.findIndex((paciente) => paciente.id === id);

  if (index !== -1) {
    return pacientes.splice(index, 1)[0];
  }
};

const actualizapaciente = (newdatospaciente) => {
  const index = pacientes.findIndex(
    (paciente) => paciente.id === newdatospaciente.id
  );

  if (index !== -1) {
    return (pacientes[index] = newdatospaciente);
  }
};

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('cliente/build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'cliente', 'build', 'index.html'));
    });
  }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));