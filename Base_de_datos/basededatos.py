import sqlite3

conn = sqlite3.connect('database.db')
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE Region (
    id_Region INT PRIMARY KEY,
    nom_Region VARCHAR(20)
)
''')

cursor.execute('''
CREATE TABLE Ciudades (
    Id_Ciudad INT PRIMARY KEY,
    Nom_Ciudad VARCHAR(50),
    id_Region INT,
    FOREIGN KEY (id_Region) REFERENCES Region(id_Region)
)
''')

cursor.execute('''
CREATE TABLE Usuarios (
    id_Usuario INT PRIMARY KEY,
    nombre VARCHAR(100),
    correo VARCHAR(100),
    contraseña INT,
    direccion VARCHAR(100),
    telefono VARCHAR(12),
    id_Region INT,
    id_Ciudad INT,
    FOREIGN KEY (id_Ciudad) REFERENCES Ciudades(Id_Ciudad),
    FOREIGN KEY (id_Region) REFERENCES Region(id_Region)
)
''')

cursor.execute('''
CREATE TABLE Soporte (
    id_Soporte INT PRIMARY KEY,
    id_Usuario INT,
    id_Empresa INT,
    FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario)
)
''')

cursor.execute('''
CREATE TABLE "Termino_condiciones" (
    id_Terminos INT PRIMARY KEY,
    fecha_Actualizacion DATE,
    contenido_privacidad VARCHAR(100),
    version VARCHAR(100),
    id_Empresa INT
)
''')

cursor.execute('''
CREATE TABLE Empresa (
    id_Empresa INT PRIMARY KEY,
    nombre_Empresa VARCHAR(100),
    direccion VARCHAR(100),
    rut_Empresa VARCHAR(50),
    des_Empresa VARCHAR(500),
    id_Usuario INT,
    FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario)
)
''')

cursor.execute('''
CREATE TABLE Politica_Privacidad (
    id_Privacidad INT PRIMARY KEY,
    fecha_Actualizacion DATE,
    contenido_privacidad VARCHAR(100),
    version VARCHAR(100),
    id_Empresa INT
)
''')

cursor.execute('''
CREATE TABLE Oferta_de_trabajo (
    id_Oferta INT PRIMARY KEY,
    descripcion VARCHAR(100),
    requisitos VARCHAR(100),
    ubicacion VARCHAR(100),
    salario INT,
    id_Empresa INT,
    FOREIGN KEY (id_Empresa) REFERENCES Empresa(id_Empresa)
)
''')

cursor.execute('''
CREATE TABLE Estadisticas (
    id_Estadistica INT PRIMARY KEY,
    is_Oferta INT,
    visitas INT,
    postulaciones INT,
    contratos INT,
    fecha_actualizacion DATETIME,
    id_Oferta INT,
    FOREIGN KEY (id_Oferta) REFERENCES Oferta_de_trabajo(id_Oferta)
)
''')

cursor.execute('''
CREATE TABLE Postulante (
    id_Postulante INT PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    edad INT,
    especialidad VARCHAR(100),
    Experiencia VARCHAR(100),
    curriculum VARCHAR(100),
    id_Usuario INT,
    FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario)
)
''')

cursor.execute('''
CREATE TABLE Registro_de_actividades (
    id_Actividad INT PRIMARY KEY,
    descripcion VARCHAR(100),
    accion VARCHAR(100),
    fecha_Hora DATETIME,
    id_usuario INT,
    id_Empresa INT,
    id_Postulante INT,
    FOREIGN KEY (id_Postulante) REFERENCES Postulante(id_Postulante),
    FOREIGN KEY (id_Empresa) REFERENCES Empresa(id_Empresa)
)
''')

cursor.execute('''
CREATE TABLE Documentos (
    id_Documento INT PRIMARY KEY,
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
    FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario),
    FOREIGN KEY (id_Postulante) REFERENCES Postulante(id_Postulante),
    FOREIGN KEY (id_Empresa) REFERENCES Empresa(id_Empresa)
)
''')

cursor.execute('''
CREATE TABLE Notificaciones (
    id_Notificacion INT PRIMARY KEY,
    id_Usuario INT,
    mensaje VARCHAR(200),
    leido BOOLEAN,
    fecha DATE,
    FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario)
)
''')

cursor.execute('''
CREATE TABLE Experiencia_Laboral (
    id_Experiencia INT PRIMARY KEY,
    empresa VARCHAR(100),
    cargo VARCHAR(100),
    fecha_Inicio DATE,
    fecha_Fin DATE,
    descripcion TEXT,
    id_Postulante INT,
    FOREIGN KEY (id_Postulante) REFERENCES Postulante(id_Postulante)
)
''')

cursor.execute('''
CREATE TABLE Administrador (
    id_Admin INT PRIMARY KEY,
    nombre VARCHAR(20),
    correo VARCHAR(100),
    telefono VARCHAR(12),
    id_Empresa INT,
    id_Usuario INT,
    FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario)
)
''')

cursor.execute('''
CREATE TABLE Postulaciones (
    id_Postulacion INT PRIMARY KEY,
    fecha_Postulacion DATETIME,
    estado VARCHAR(100),
    id_Postulante INT,
    FOREIGN KEY (id_Postulante) REFERENCES Postulante(id_Postulante)
)
''')

cursor.execute('''
CREATE TABLE Especialidad (
    id_Especialidad INT PRIMARY KEY,
    nom_Especialidad VARCHAR(100),
    id_Postulante INT,
    FOREIGN KEY (id_Postulante) REFERENCES Postulante(id_Postulante)
)
''')

conn.commit()

conn.close()
