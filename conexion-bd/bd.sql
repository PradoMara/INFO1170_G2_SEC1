CREATE TABLE Region (
  id_Region INT,
  nom_Region VARCHAR(20),
  PRIMARY KEY (id_Region)
);

CREATE TABLE Ciudades (
  Id_Ciudad INT,
  Nom_Ciudad VARCHAR(50),
  id_Region INT,
  PRIMARY KEY (Id_Ciudad),
  FOREIGN KEY (id_Region) REFERENCES Region(id_Region)
);

CREATE TABLE Usuarios (
  id_Usuario INT,
  nombre VARCHAR(100),
  correo VARCHAR(100),
  contraseña VARCHAR(255), -- Mejor usar VARCHAR para almacenar contraseñas encriptadas
  direccion VARCHAR(100),
  telefono VARCHAR(12),
  id_Region INT,
  id_Ciudad INT,
  PRIMARY KEY (id_Usuario),
  FOREIGN KEY (id_Ciudad) REFERENCES Ciudades(Id_Ciudad),
  FOREIGN KEY (id_Region) REFERENCES Region(id_Region)
);

CREATE TABLE Soporte (
  id_Soporte INT,
  id_Usuario INT,
  id_Empresa INT,
  PRIMARY KEY (id_Soporte),
  FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario)
);

CREATE TABLE Terminos_condiciones (
  id_Terminos INT,
  fecha_Actualizacion DATE,
  contenido_privacidad VARCHAR(100),
  version VARCHAR(100),
  id_Empresa INT,
  PRIMARY KEY (id_Terminos)
);

CREATE TABLE Empresa (
  id_Empresa INT,
  nombre_Empresa VARCHAR(100),
  direccion VARCHAR(100),
  rut_Empresa VARCHAR(50),
  des_Empresa VARCHAR(500),
  id_Usuario INT,
  PRIMARY KEY (id_Empresa),
  FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario)
);

CREATE TABLE Politica_Privacidad (
  id_Privacidad INT,
  fecha_Actualizacion DATE,
  contenido_privacidad VARCHAR(100),
  version VARCHAR(100),
  id_Empresa INT,
  PRIMARY KEY (id_Privacidad)
);

CREATE TABLE Oferta_trabajo (
  id_Oferta INT,
  descripcion VARCHAR(100),
  requisitos VARCHAR(100),
  ubicacion VARCHAR(100),
  salario INT,
  id_Empresa INT,
  PRIMARY KEY (id_Oferta),
  FOREIGN KEY (id_Empresa) REFERENCES Empresa(id_Empresa)
);

CREATE TABLE Estadisticas (
  id_Estadistica INT,
  id_Oferta INT,
  visitas INT,
  postulaciones INT,
  contratos INT,
  fecha_actualizacion DATETIME,
  PRIMARY KEY (id_Estadistica),
  FOREIGN KEY (id_Oferta) REFERENCES Oferta_trabajo(id_Oferta)
);

CREATE TABLE Postulante (
  id_Postulante INT,
  nombre VARCHAR(100),
  apellido VARCHAR(100),
  edad INT,
  especialidad VARCHAR(100),
  experiencia VARCHAR(100),
  curriculum VARCHAR(100),
  id_Usuario INT,
  PRIMARY KEY (id_Postulante),
  FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario)
);

CREATE TABLE Registro_actividades (
  id_Actividad INT,
  descripcion VARCHAR(100),
  accion VARCHAR(100),
  fecha_Hora DATETIME,
  id_usuario INT,
  id_Empresa INT,
  id_Postulante INT,
  PRIMARY KEY (id_Actividad),
  FOREIGN KEY (id_Postulante) REFERENCES Postulante(id_Postulante),
  FOREIGN KEY (id_Empresa) REFERENCES Empresa(id_Empresa)
);

CREATE TABLE Documentos (
  id_Documento INT,
  nom_Documento VARCHAR(200),
  tipo_Documento VARCHAR(50),
  size INT,
  fecha_Subida DATETIME,
  ubicacion_Archivo VARCHAR(100),
  descripcion VARCHAR(200),
  fecha_Expiracion DATETIME,
  id_Usuario INT,
  id_Empresa INT,
  id_Postulante INT,
  PRIMARY KEY (id_Documento),
  FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario),
  FOREIGN KEY (id_Postulante) REFERENCES Postulante(id_Postulante),
  FOREIGN KEY (id_Empresa) REFERENCES Empresa(id_Empresa)
);

CREATE TABLE Notificaciones (
  id_Notificacion INT,
  id_Usuario INT,
  mensaje VARCHAR(200),
  leido BOOLEAN,
  fecha DATE,
  PRIMARY KEY (id_Notificacion),
  FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario)
);

CREATE TABLE Experiencia_Laboral (
  id_Experiencia INT,
  empresa VARCHAR(100),
  cargo VARCHAR(100),
  fecha_Inicio DATE,
  fecha_Fin DATE,
  descripcion TEXT,
  id_Postulante INT,
  PRIMARY KEY (id_Experiencia),
  FOREIGN KEY (id_Postulante) REFERENCES Postulante(id_Postulante)
);

CREATE TABLE Administrador (
  id_Admin INT,
  nombre VARCHAR(20),
  correo VARCHAR(100),
  telefono VARCHAR(12),
  id_Empresa INT,
  id_Usuario INT,
  PRIMARY KEY (id_Admin),
  FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario)
);

CREATE TABLE Postulaciones (
  id_Postulacion INT,
  fecha_Postulacion DATETIME,
  estado VARCHAR(100),
  id_Postulante INT,
  PRIMARY KEY (id_Postulacion),
  FOREIGN KEY (id_Postulante) REFERENCES Postulante(id_Postulante)
);

CREATE TABLE Especialidad (
  id_Especialidad INT,
  nom_Especialidad VARCHAR(100),
  id_Postulante INT,
  PRIMARY KEY (id_Especialidad),
  FOREIGN KEY (id_Postulante) REFERENCES Postulante(id_Postulante)
);
