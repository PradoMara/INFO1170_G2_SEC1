import sqlite3

# Conectar a la base de datos (o crearla si no existe)
conn = sqlite3.connect('mi_base_de_datos.db')
cursor = conn.cursor()

# Crear las tablas
cursor.execute('''
CREATE TABLE IF NOT EXISTS Region (
    id_Region INTEGER PRIMARY KEY,
    nom_Region TEXT
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS Ciudades (
    Id_Ciudad INTEGER PRIMARY KEY,
    Nom_Ciudad TEXT,
    id_Region INTEGER,
    FOREIGN KEY (id_Region) REFERENCES Region(id_Region)
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS Usuarios (
    id_Usuario INTEGER PRIMARY KEY,
    nombre TEXT,
    correo TEXT,
    contraseña INTEGER,
    direccion TEXT,
    telefono TEXT,
    id_Region INTEGER,
    id_Ciudad INTEGER,
    FOREIGN KEY (id_Ciudad) REFERENCES Ciudades(Id_Ciudad),
    FOREIGN KEY (id_Region) REFERENCES Region(id_Region)
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS Soporte (
    id_Soporte INTEGER PRIMARY KEY,
    id_Usuario INTEGER,
    id_Empresa INTEGER,
    FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario)
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS Termino_condiciones (
    id_Terminos INTEGER PRIMARY KEY,
    fecha_Actualizacion DATE,
    contenido_privacidad TEXT,
    version TEXT,
    id_Empresa INTEGER
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS Empresa (
    id_Empresa INTEGER PRIMARY KEY,
    nombre_Empresa TEXT,
    direccion TEXT,
    rut_Empresa TEXT,
    des_Empresa TEXT,
    id_Usuario INTEGER,
    FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario)
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS Politica_Privacidad (
    id_Privacidad INTEGER PRIMARY KEY,
    fecha_Actualizacion DATE,
    contenido_privacidad TEXT,
    version TEXT,
    id_Empresa INTEGER
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS Postulante (
    id_Postulante INTEGER PRIMARY KEY,
    nombre TEXT,
    apellido TEXT,
    edad INTEGER,
    especialidad TEXT,
    Experiencia TEXT,
    curriculum TEXT,
    id_Usuario INTEGER,
    FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario)
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS Registro_de_actividades (
    id_Actividad INTEGER PRIMARY KEY,
    descripcion TEXT,
    accion TEXT,
    fecha_Hora DATETIME,
    id_usuario INTEGER,
    id_Empresa INTEGER,
    id_Postulante INTEGER,
    FOREIGN KEY (id_Postulante) REFERENCES Postulante(id_Postulante),
    FOREIGN KEY (id_Empresa) REFERENCES Empresa(id_Empresa)
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS Documentos (
    id_Documento INTEGER PRIMARY KEY,
    nom_Documento TEXT,
    tipo_Documento TEXT,
    size INTEGER,
    fecha_Subida DATETIME,
    ubicacion_Archivo TEXT,
    descripcion TEXT,
    fecha_Expiracion DATETIME,
    id_Usuario INTEGER,
    id_Empresa INTEGER,
    id_Postulante INTEGER,
    FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario),
    FOREIGN KEY (id_Postulante) REFERENCES Postulante(id_Postulante),
    FOREIGN KEY (id_Empresa) REFERENCES Empresa(id_Empresa)
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS Oferta_de_trabajo (
    id_Oferta INTEGER PRIMARY KEY,
    descripcion TEXT,
    requisitos TEXT,
    ubicacion TEXT,
    salario INTEGER,
    id_Empresa INTEGER,
    FOREIGN KEY (id_Empresa) REFERENCES Empresa(id_Empresa)
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS Administrador (
    id_Admin INTEGER PRIMARY KEY,
    nombre TEXT,
    correo TEXT,
    telefono TEXT,
    id_Empresa INTEGER,
    id_Usuario INTEGER,
    FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario)
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS Postulaciones (
    id_Postulacion INTEGER PRIMARY KEY,
    fecha_Postulacion DATETIME,
    estado TEXT,
    id_Postulante INTEGER,
    FOREIGN KEY (id_Postulante) REFERENCES Postulante(id_Postulante)
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS Especialidad (
    id_Especialidad INTEGER PRIMARY KEY,
    nom_Especialidad TEXT,
    id_Postulante INTEGER,
    FOREIGN KEY (id_Postulante) REFERENCES Postulante(id_Postulante)
)
''')

# Confirmar los cambios y cerrar la conexión
conn.commit()
conn.close() 
