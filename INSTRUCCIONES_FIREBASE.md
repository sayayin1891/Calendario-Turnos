# 🔥 Configuración de Firebase - Calendario de Turnos

## ✅ Tu app YA FUNCIONA sin Firebase (modo local)

La aplicación ahora tiene **manejo de errores robusto** y funcionará perfectamente incluso sin configurar Firebase.

---

## 📋 Pasos para Activar Firebase Real (Opcional)

### Paso 1: Obtener Credenciales de Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/project/calendario-turnos-a0859)
2. Click en **⚙️ Settings** (engranaje) → **Project settings**
3. Baja a **"Your apps"** → Selecciona la app web (o créala si no existe)
4. Copia el objeto `firebaseConfig` que se ve así:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "calendario-turnos-a0859.firebaseapp.com",
  projectId: "calendario-turnos-a0859",
  storageBucket: "calendario-turnos-a0859.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

### Paso 2: Actualizar index.html

Reemplaza las credenciales en `/workspace/index.html` (líneas 358-365):

```bash
# Abre el archivo y busca esta sección (~línea 358)
const firebaseConfig = { ... }
```

Pega TUS credenciales reales allí.

### Paso 3: Habilitar Email/Password en Firebase Console

1. Ve a [Authentication](https://console.firebase.google.com/project/calendario-turnos-a0859/authentication/providers)
2. Click en **"Email/Password"**
3. Activa el toggle **"Enable"**
4. Click **"Save"**

### Paso 4: Crear Firestore Database

1. Ve a [Firestore](https://console.firebase.google.com/project/calendario-turnos-a0859/firestore)
2. Click **"Create database"**
3. Selecciona **"Start in test mode"** (para desarrollo)
4. Elige una ubicación cercana (ej: us-central)
5. Click **"Enable"**

---

## 🚀 Probar la App Localmente

La app ya está corriendo en: http://localhost:8080

**Sin Firebase configurado:**
- ✅ Funciona con localStorage
- ✅ Puedes crear turnos
- ✅ Exporta a Google Calendar (.ics)
- ⚠️ Login mostrará mensaje de error amigable

**Con Firebase configurado:**
- ✅ Login/Registro con email/password
- ✅ Sincronización en la nube
- ✅ Datos accesibles desde cualquier dispositivo

---

## 📱 Instalar en iOS/Android

### iOS (Safari):
1. Abrir la URL en Safari
2. Click en **Compartir** (cuadrado con flecha)
3. **"Agregar a Inicio"**

### Android (Chrome):
1. Abrir la URL en Chrome
2. Menú (3 puntos)
3. **"Instalar aplicación"** o **"Agregar a pantalla principal"**

---

## 🔑 Credenciales Actuales (PLACEHOLDER)

Actualmente el archivo tiene credenciales de ejemplo. Para producción, DEBES reemplazarlas con las tuyas reales de Firebase Console.

Ubicación en `index.html`: Líneas 358-365

---

## 💡 Tips Importantes

1. **Reglas de Firestore para producción:**
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId}/{subCollection=subCollectionId}/{document=**} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```

2. **Deploy a Firebase Hosting:**
   ```bash
   firebase login
   firebase deploy --only hosting
   ```
   URL resultante: `https://calendario-turnos-a0859.web.app`

3. **Soporte técnico:** Si tienes problemas, revisa la consola del navegador (F12) para ver errores detallados.

---

## ✨ Características Incluidas

- ✅ Login profesional con email/password
- ✅ Registro de nuevos usuarios
- ✅ Sincronización automática con Firestore
- ✅ Migración de datos locales a la nube
- ✅ Modo offline (localStorage) si Firebase falla
- ✅ UI moderna y responsive
- ✅ Compatible iOS/Android como PWA
- ✅ Exportación a Google Calendar
- ✅ Generador automático 7x7
