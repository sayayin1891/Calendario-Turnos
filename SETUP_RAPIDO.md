# 🚀 Setup Rápido - Calendario con Firebase

## ✅ Lo que ya está hecho:

1. **Código actualizado** con Firebase SDK
2. **Pantalla de login profesional** diseñada
3. **Autenticación Email/Password** implementada
4. **Sincronización Firestore** configurada
5. **Archivos Firebase** creados (`firebase.json`, `.firebaserc`)

---

## 🔧 PASOS QUE DEBES SEGUIR (5 minutos):

### 1️⃣ Habilitar Authentication en Firebase Console

```
👉 https://console.firebase.google.com/project/calendario-turnos-a0859/authentication/providers
```

- Haz clic en **Email/Password**
- Activa el primer interruptor ("Enable")
- Click en **Save**

### 2️⃣ Crear Base de Datos Firestore

```
👉 https://console.firebase.google.com/project/calendario-turnos-a0859/firestore
```

- Click en **Create database**
- Selecciona **Start in test mode**
- Elige ubicación: `us-central1` (o la más cercana a Chile)
- Click en **Enable**

### 3️⃣ Obtener Tus Credenciales Reales

```
👉 https://console.firebase.google.com/project/calendario-turnos-a0859/settings/general
```

- Baja hasta "Your apps"
- Si no hay app web registrada, haz clic en el ícono `</>` (Web)
- Registra tu app con el nickname "Calendario Turnos"
- Copia el objeto `firebaseConfig` que aparece

### 4️⃣ Actualizar Credenciales en index.html

Abre `/workspace/index.html` y busca (línea ~359):

```javascript
const firebaseConfig = {
  apiKey: "TU_API_KEY_AQUI",
  authDomain: "calendario-turnos-a0859.firebaseapp.com",
  projectId: "calendario-turnos-a0859",
  storageBucket: "calendario-turnos-a0859.firebasestorage.app",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};
```

Reemplaza con tus credenciales reales de Firebase Console.

### 5️⃣ Probar Localmente (Opcional)

```bash
cd /workspace
python3 -m http.server 8000
```

Abre `http://localhost:8000` en tu navegador

### 6️⃣ Desplegar a Firebase Hosting

```bash
# Inicia sesión (solo la primera vez)
firebase login

# Despliega
firebase deploy --only hosting
```

Tu app estará disponible en:
```
https://calendario-turnos-a0859.web.app
```

---

## 📱 Instalar en tu Celular

### iPhone (iOS):
1. Abre Safari
2. Ve a la URL de tu app
3. Botón Compartir (cuadrado con flecha)
4. "Agregar a Inicio"

### Android:
1. Abre Chrome
2. Ve a la URL de tu app
3. Menú (3 puntos)
4. "Instalar aplicación" o "Agregar a pantalla principal"

---

## 🎯 Características Incluidas:

✅ Login profesional con email/password  
✅ Registro de nuevos usuarios  
✅ Sincronización automática con Firestore  
✅ Diseño moderno y responsive  
✅ Funciona offline (PWA)  
✅ Exporta a Google Calendar (.ics)  
✅ Genera PDF del calendario  
✅ Personaliza colores  
✅ Soporte iOS y Android  

---

## 🆘 ¿Problemas?

**Error de autenticación:**
- Verifica que Email/Password esté habilitado en Firebase Console

**Error de Firestore:**
- Asegúrate de haber creado la base de datos
- Usa "test mode" inicialmente

**Los datos no se guardan:**
- Revisa la consola del navegador (F12)
- Verifica las credenciales de Firebase

---

**¡Listo! Tu calendario ahora tiene login y sincronización en la nube.** 🎉
