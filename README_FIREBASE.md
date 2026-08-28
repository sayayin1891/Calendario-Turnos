# 🔥 Configuración de Firebase - Calendario de Turnos

## Proyecto Firebase
- **Project ID**: `calendario-turnos-a0859`
- **Nombre**: Calendario Turnos Los Pelambres

## ✅ Configuración Completada

### 1. Archivos Creados
- `firebase.json` - Configuración de Hosting
- `.firebaserc` - Asociación con el proyecto
- `index.html` - Actualizado con Firebase SDK y autenticación

### 2. Características Implementadas
- ✅ Login con Email/Password usando Firebase Authentication
- ✅ Base de datos Firestore para sincronización en la nube
- ✅ Pantalla de login profesional con diseño moderno
- ✅ Migración automática de datos locales a Firestore
- ✅ Auto-guardado de cambios en tiempo real
- ✅ Soporte para iOS y Android (PWA)

## 📋 PASOS PARA COMPLETAR LA CONFIGURACIÓN

### Paso 1: Habilitar Authentication en Firebase Console
1. Ve a [Firebase Console](https://console.firebase.google.com/project/calendario-turnos-a0859)
2. Navega a **Authentication** → **Sign-in method**
3. Habilita **Email/Password** como primer proveedor
4. Guarda los cambios

### Paso 2: Crear Base de Datos Firestore
1. En Firebase Console, ve a **Firestore Database**
2. Haz clic en **Create database**
3. Selecciona **Start in test mode** (puedes cambiar las reglas después)
4. Elige una ubicación cercana (ej: us-central1)

### Paso 3: Configurar Reglas de Seguridad (Recomendado)
En Firestore Rules, usa esto para producción:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{collection=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### Paso 4: Obtener Credenciales Reales
1. En Firebase Console, ve a **Project Settings** (engranaje)
2. Baja hasta "Your apps" y haz clic en el ícono web `</>`
3. Registra tu app si no está registrada
4. Copia el objeto `firebaseConfig` que aparece
5. Reemplaza las credenciales placeholder en `index.html` (líneas 357-364)

### Paso 5: Desplegar a Firebase Hosting
```bash
# Inicia sesión en Firebase (necesitas hacerlo manualmente)
firebase login

# Despliega tu app
firebase deploy --only hosting
```

## 🔐 Registro de Usuarios

Los usuarios pueden:
1. Registrarse con email y contraseña
2. Iniciar sesión en cualquier dispositivo
3. Sus datos se sincronizan automáticamente
4. Cerrar sesión manteniendo datos guardados

## 📱 Instalación en Dispositivos

### iOS (Safari)
1. Abre la URL de tu app
2. Toca el botón Compartir
3. Selecciona "Agregar a Inicio"

### Android (Chrome)
1. Abre la URL de tu app
2. Toca los tres puntos (menú)
3. Selecciona "Instalar aplicación" o "Agregar a pantalla principal"

## 🎨 Diseño Profesional Incluido
- Gradientes modernos (#1a3a5c → #4a2060)
- Animaciones suaves
- Responsive para todos los dispositivos
- Icono de calendario profesional
- Estados de carga y error amigables

## 📊 Estructura de Datos en Firestore
```
users/
  {uid}/
    data/
      calendar: {
        ov: {...},       // Datos del calendario
        colors: {...},   // Colores personalizados
        updatedAt: timestamp
      }
```

## 🆘 Solución de Problemas

### Error: "Failed to authenticate"
- Ejecuta `firebase login` en la terminal

### Error: "Permission denied" en Firestore
- Verifica que Authentication esté habilitado
- Revisa las reglas de seguridad de Firestore

### Los datos no se sincronizan
- Verifica que el usuario haya iniciado sesión
- Revisa la consola del navegador para errores

---

**Desarrollado para Minera Los Pelambres - Sodexo Chile**
