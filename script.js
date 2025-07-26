// Datos de los proyectos (estructura completa)
const projectsData = {
  "proyecto1": {
    "title": "Máquina CNC Láser",
    "images": ["images/cnc.png","images/cnc2.jpg","images/cnc3.jpg","images/cnc4.jpg","images/cnc5.jpg","images/cnc6.gif","images/cnc7.gif"],
    "description": "Diseño y construcción de una máquina CNC cartesiana basada en ESP32 con firmware de código abierto FluidNC.",
    "tags": ["Automatización", "CNC", "Impresión 3D", "Esp32", "Prototipado"],
    "details": {
      "Objetivo": "Desarrollar una máquina CNC cartesiana utilizando herramientas como impresión 3D y software y hardware de código abierto, buscando tambien un diseño expandible para obtener un área de trabajo ajustable.",
      "Tecnologías": "Esp32, FluidNC, Impresión y dibujo 3D",
      "Desarrollo": [
        "Prueba del firmware FluidNC en el Esp32 y su compatibilidad con los diferentes GCODE senders",
        "Prueba de motores a paso",
        "Diseño de las piezas utilizando Fusion 360",
        "Impresión en 3D de las piezas en PLA",
        "Construcción de la máquina",
        "Asignación de pines del microcontrolador para sensores de límite y spindle",
        "Calibración de pasos por milimetro y velocidades de los motores",
        "Se obtuvo una máquina CNC láser funcional con un área de trabajo de 50cm2"
      ]
    },
  },
  "proyecto2": {
    "title": "Prototipo de rehabilitador de tobillo",
    "images": ["images/rehab1.png","images/rehab2.jpg","images/rehab3.jpg","images/rehab4.png","images/rehab5.png"],
    "description": "Programación de prototipo de rehabilitador de tobillo basado en Esp32 utilizando ESP-IDF como framework para la programación en C++.",
    "tags": ["Esp32", "C++", "IoT", "Prototipado"],
    "details": {
      "Objetivo": "Desarrollar un prototipo de rehabilitador de tobillo con dos grados de libertad que permita acelerar el proceso de recuperación en pacientes con lesiones que involucren los movimientos de aducción, abducción, dorsiflexión y plantarflexión. Además, se busca que sea fácil de utilizar para que los profesionales de la salud no tengan complicaciones a la hora de operarlo",
      "Tecnologías": "Impresión 3D, Esp32, ESP-NOW, I2C, SPI",
      "Desarrollo": [
        "Diseño de la plataforma de apoyo para el pie, integrando motores a paso con sistemas de poleas para lograr un mayor torque",
        "Impresión en 3D de las piezas",
        "Programación del Esp32 utilizando lenguaje C++",
        "Integración de una pantalla LCD con comunicación SPI",
        "Integración de un giroscópio para el monitoreo de ángulos en tiempo real con comunicación I2C",
        "Desarrollo de una interfaz gráfica en python para la comunicación serial con el MCU con el objetivo de almacenar datos en archivos .csv",
        "Programación del protocolo ESP-NOW para enviar datos inalambricamente hacia otro Esp32"
      ]
    },
  },
  "proyecto3": {
    "title": "Prototipo de sistema hidráulico para el control de variables",
    "images": ["images/did1.jpg","images/did2.jpg","images/did3.jpg","images/did4.jpg","images/did5.png","images/did6.png","images/did7.png","images/did8.gif","images/did9.gif"],
    "description": "Planeación, dirección e implementación de un sistema hidráulico didáctico enfocado al aprendizaje de conceptos relacionados a variables físicas presentes en procesos industriales.",
    "tags": ["Esp32", "PCB", "MicroPython", "Prototipado"],
    "details": {
      "Objetivo": "Desarrollar un sistema didáctico que permita observar el comportamiento de variables relacionadas al agua como temperatura, nivel y caudal, además de utilizar sensores y actuadores que permitan realizar procesos que involucran controles del tipo PID.",
      "Tecnologías": "Esp32, PCB, I2C, SPI, Control PID, control ON-OFF",
      "Desarrollo": [
        "Determinación de variables a controlar, siendo temperatura, caudal y nivel las elegidas",
        "Selección de sensores, actuadores y controladores. Caudalimetro y bomba de diafragma para caudal, resistencia y termostato para temperatura y sensor ultrasónico y flotadores para nivel",
        "Programación del microcontrolador Esp32 utilizando MicroPython, apoyados de github como medio de colaboración y control de versiones",
        "Implementación de un control PID para la bomba de agua que busca mantener un caudal constante en las tuberias del sistema",
        "Diseño de una interfaz gráfica dentro del microcontrolador utilizando un display LCD con comunicación SPI",
        "Aislamiento de la electrónica de potencia utilizando relevadores, mosfets y optoacopladores como medida de protección",
        "Diseño de una PCB que integra tanto la parte de control como la de potencia",
        "Construcción del sistema utilizando tanques de acrilico, tubos de PVC y madera"
      ]
    },
  },
  "proyecto4": {
    "title": "Investigación sobre compensadores en adelanto aplicados a la modulación AM",
    "images": ["images/control1.png","images/control2.png","images/control3.jpg","images/control4.jpg","images/control5.jpg"],
    "description": "Diseño de compensador en adelanto para un sistema de comunicación AM aplicando metodos experimentales de control moderno y utilizando herramientas de análisis de datos como MATLab.",
    "tags": ["Telecomunicaciones", "Control", "Investigación", "PCB", "MATLAB"],
    "details": {
      "Objetivo": "Diseñar un compensador en adelanto para un sistema de modulación y demodulación AM, buscando mejorar el margen de fase de la señal transmitida afectada por la señal portadora",
      "Tecnologías": "Esp32, PCB, MATLAB, Control, OPAMPS, modulación AM",
      "Desarrollo": [
        "Se plantea el problema, la señal moduladora cambia su fase y amplitud al pasar por el modulador y demodulador, por lo que se busca una solución que mejore esta señal de salida con respecto a la entrada",
        "Se diseña el modulador AM, utilizando un circuito transistorizado para la modulación y un circuito con diodo para la demodulación no coherente",
        "Programación del DAC de un ESP32 para generar la señal portadora de 500kHz",
        "Se registran los datos de la señal de salida con respecto a la entrada, considerando el desfase y atenuación en dB y se realizan graficos de bode",
        "Con el metodo experimental del libro de control moderno de Ogata se obtiene la ecuación en laplace del sistema, lo cual permite obtener los polos y ceros del sistema, asi como el margen de fase y de ganancia",
        "Se diseña el compensador utilizando MATLAB y el metodo de análisis en frecuencia",
        "Con la ecuacion del compensador se calculan las resistencias y capacitores del compensador que se agregará al circuito despues del demodulador",
        "Se realiza una PCB para integrar todos los componentes de manera ordenada"
      ],
      "Artículo completo":"https://doi.org/10.61117/ipsumtec.v8i1.365"
    },
  }
};

let currentImageIndex = 0;
let currentProjectImages = [];
let currentProjectId = '';

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.project-card .btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      currentProjectId = this.closest('.project-card').getAttribute('data-project-id');
      openModal(currentProjectId);
    });
  });
  
  document.querySelector('.close-modal').addEventListener('click', closeModal);
  
  document.querySelector('.prev-btn').addEventListener('click', showPreviousImage);
  document.querySelector('.next-btn').addEventListener('click', showNextImage);
  document.getElementById('projectModal').addEventListener('click', function(e) {
    if (e.target === this) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', handleKeyboardNavigation);
});

function openModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;
  
  currentProjectId = projectId;
  currentProjectImages = project.images || [];
  currentImageIndex = 0;
  
  document.getElementById('modalProjectTitle').textContent = project.title;
  document.getElementById('modalProjectDescription').textContent = project.description;
  
  const tagsContainer = document.getElementById('modalProjectTags');
  tagsContainer.innerHTML = '';
  project.tags.forEach(tag => {
    const tagElement = document.createElement('span');
    tagElement.className = 'modal-tag';
    tagElement.textContent = tag;
    tagsContainer.appendChild(tagElement);
  });
  
  const detailsContainer = document.getElementById('modalProjectDetails');
  detailsContainer.innerHTML = '';
  
  for (const [key, value] of Object.entries(project.details)) {
    const detailSection = document.createElement('div');
    detailSection.className = 'detail-section';
    
    const detailTitle = document.createElement('h4');
    detailTitle.textContent = key;
    detailSection.appendChild(detailTitle);
    
    if (Array.isArray(value)) {
      const list = document.createElement('ul');
      value.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      });
      detailSection.appendChild(list);
    } else {
      const detailText = document.createElement('p');
      detailText.textContent = value;
      detailSection.appendChild(detailText);
    }
    
    detailsContainer.appendChild(detailSection);
  }
  
  if (currentProjectImages.length > 0) {
    document.getElementById('mainProjectImage').src = currentProjectImages[0];
    updateThumbnails();
  }
  
  document.getElementById('projectModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('projectModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

function updateThumbnails() {
  const thumbnailContainer = document.getElementById('thumbnailContainer');
  thumbnailContainer.innerHTML = '';
  
  currentProjectImages.forEach((image, index) => {
    const thumbnail = document.createElement('div');
    thumbnail.className = `thumbnail ${index === currentImageIndex ? 'active' : ''}`;
    thumbnail.innerHTML = `<img src="${image}" alt="Miniatura ${index + 1}">`;
    
    thumbnail.addEventListener('click', () => {
      currentImageIndex = index;
      document.getElementById('mainProjectImage').src = image;
      updateActiveThumbnail();
    });
    
    thumbnailContainer.appendChild(thumbnail);
  });
}

function updateActiveThumbnail() {
  document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
    thumb.classList.toggle('active', index === currentImageIndex);
  });
}

function showPreviousImage() {
  if (currentProjectImages.length === 0) return;
  currentImageIndex = (currentImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
  document.getElementById('mainProjectImage').src = currentProjectImages[currentImageIndex];
  updateActiveThumbnail();
}

function showNextImage() {
  if (currentProjectImages.length === 0) return;
  currentImageIndex = (currentImageIndex + 1) % currentProjectImages.length;
  document.getElementById('mainProjectImage').src = currentProjectImages[currentImageIndex];
  updateActiveThumbnail();
}

function handleKeyboardNavigation(e) {
  const modal = document.getElementById('projectModal');
  if (modal.style.display === 'block') {
    switch(e.key) {
      case 'Escape':
        closeModal();
        break;
      case 'ArrowLeft':
        showPreviousImage();
        break;
      case 'ArrowRight':
        showNextImage();
        break;
    }
  }
}

function fadeInImage(imageElement, src) {
  imageElement.style.opacity = 0;
  setTimeout(() => {
    imageElement.src = src;
    imageElement.style.opacity = 1;
  }, 100);
}

function showPreviousImageWithFade() {
  if (currentProjectImages.length === 0) return;
  currentImageIndex = (currentImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
  const mainImage = document.getElementById('mainProjectImage');
  fadeInImage(mainImage, currentProjectImages[currentImageIndex]);
  updateActiveThumbnail();
}

function showNextImageWithFade() {
  if (currentProjectImages.length === 0) return;
  currentImageIndex = (currentImageIndex + 1) % currentProjectImages.length;
  const mainImage = document.getElementById('mainProjectImage');
  fadeInImage(mainImage, currentProjectImages[currentImageIndex]);
  updateActiveThumbnail();
}