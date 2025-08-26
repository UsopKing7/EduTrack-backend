# 📚 EduTrack – Sistema de Gestión Escolar

# Arquitectura para este proyecto DDD (Domain Drive Dising)
```yml
src
├── core               # Reglas genéricas, shared kernel
│   ├── entities       # Entidades base (User, BaseEntity, etc.)
│   ├── value-objects  # Email, NotaValor, Fecha, etc.
│   ├── interfaces     # Interfaces comunes
│   └── errors         # Excepciones custom
│
├── modules
│   ├── alumnos
│   │   ├── domain
│   │   │   ├── entities     # Alumno
│   │   │   ├── value-objects# EmailAlumno, NombreAlumno
│   │   │   └── services     # Reglas (ej: validar inscripción)
│   │   ├── application
│   │   │   ├── use-cases    # CrearAlumno, ActualizarAlumno
│   │   │   └── dto          # Datos de entrada/salida
│   │   └── infra
│   │       ├── prisma       # Repositorios Prisma
│   │       ├── controllers  # Express controllers
│   │       └── routes       # Endpoints
│   │
│   ├── profesores
│   │   └── ... (igual estructura)
│   ├── materias
│   │   └── ...
│   ├── notas
│   │   └── ...
│   └── reportes
│       └── ...
│
├── shared
│   ├── middlewares   # Auth, logs
│   ├── utils         # Generación PDF, Excel
│   └── config        # DB, env
│
└── app.ts

```