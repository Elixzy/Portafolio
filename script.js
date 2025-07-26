// Datos de los proyectos (estructura completa)
const projectsData = {
  "proyecto1": {
    "title": "Máquina CNC Láser",
    "images": ["images/cnc.png","images/cnc2.jpg","images/cnc3.jpg","images/cnc4.jpg","images/cnc5.jpg"],
    "description": "Diseño y construcción de una máquina CNC cartesiana basada en ESP32 con firmware de código abierto FluidNC.",
    "tags": ["Automatización", "CNC", "Impresion 3D", "Esp32", "Prototipado"],
    "details": {
      "Objetivo": "Desarrollar una máquina CNC cartesiana utilizando herramientas como impresión 3D y software y hardware de código abierto, buscando tambien un diseño expandible para obtener un área de trabajo ajustable.",
      "Tecnologías": "Esp32, FluidNC, Impresión y dibujo 3D",
      "Desarrollo": [
        "Prueba del firmware FluidNC en el Esp32 y su compatibilidad con los diferentes GCODE senders",
        "Prueba de motores a paso",
        "Diseño de las piezas utilizando Fusion 360",
        "Impresión de las piezas en PLA con impresión 3D",
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
        "Diseño de la plataforma de apoyo para el pié, integrando motores a paso con sistemas de poleas para lograr un mayor torque",
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
    "images": ["images/did1.jpg","images/did2.jpg","images/did3.jpg","images/did4.jpg","images/did5.png","images/did6.png","images/did7.png"],
    "description": "Planeación, dirección e implementación de un sistema hidráulico didáctico enfocado al aprendizaje de conceptos relacionados a variables físicas presentes en procesos industriales.",
    "tags": ["Esp32", "PCB", "MicroPython", "Prototipado"],
    "details": {
      "Objetivo": "Desarrollar un sistema didáctico que permita observar el comportamiento de variables relacionadas al agua como temperatura, nivel y caudal, además de utilizar sensores y actuadores que permitan realizar procesos que involucran controles del tipo PID.",
      "Tecnologías": "Impresión 3D, Esp32, ESP-NOW, I2C, SPI",
      "Desarrollo": [
        "Diseño de la plataforma de apoyo para el pié, integrando motores a paso con sistemas de poleas para lograr un mayor torque",
        "Impresión en 3D de las piezas",
        "Programación del Esp32 utilizando lenguaje C++",
        "Integración de una pantalla LCD con comunicación SPI",
        "Integración de un giroscópio para el monitoreo de ángulos en tiempo real con comunicación I2C",
        "Desarrollo de una interfaz gráfica en python para la comunicación serial con el MCU con el objetivo de almacenar datos en archivos .csv",
        "Programación del protocolo ESP-NOW para enviar datos inalambricamente hacia otro Esp32"
      ]
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