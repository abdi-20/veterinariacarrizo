# 🐾 Veterinaria El Carrizo

Bienvenido al repositorio oficial del sitio web de **Veterinaria El Carrizo**. Este proyecto es una solución web desarrollada para la materia de **Gestión de Software**, diseñada para digitalizar los servicios de una clínica veterinaria local.

![Logo del Proyecto](img/logo.png)

## 📋 Descripción del Proyecto

El objetivo principal de este sistema es ofrecer una presencia digital para "Veterinaria El Carrizo", facilitando la interacción con los clientes a través de dos funcionalidades clave:
1.  **Difusión de Productos:** Un catálogo visual de alimentos, accesorios y medicinas.
2.  **Gestión de Citas:** Un módulo para que los dueños de mascotas puedan agendar consultas, vacunaciones o estéticas de manera remota.

## 🚀 Características Principales

* **Diseño Responsivo:** Adaptable a dispositivos móviles y escritorio.
* **Catálogo de Productos:** Grid layout para exhibición clara de artículos.
* **Formulario de Citas:** Incluye validaciones de integridad de datos (ej. no permite seleccionar fechas pasadas).
* **Interfaz Intuitiva:** Navegación clara y llamadas a la acción (CTA) definidas.

## 🛠️ Tecnologías Utilizadas

Este proyecto sigue una arquitectura de **Separación de Intereses (SoC)**, dividiendo la lógica en tres capas:

* **HTML5** (Estructura Semántica): Para el esqueleto y contenido del sitio.
* **CSS3** (Presentación): Estilos personalizados, variables CSS y diseño Flexbox/Grid.
* **JavaScript** (Comportamiento): Lógica del lado del cliente para validaciones y manejo de eventos del DOM.

## 📂 Estructura del Proyecto

El repositorio está organizado de la siguiente manera para facilitar la mantenibilidad:

```text
📁 Proyecto
├── 📂 CSS
│   └── style.css       # Hoja de estilos principal
├── 📂 img
│   └── logo.png        # Recursos gráficos
├── 📂 JavaScript
│   └── script.js       # Lógica de validación y eventos
├── index.html          # Punto de entrada de la aplicación
└── README.md           # Documentación del proyecto