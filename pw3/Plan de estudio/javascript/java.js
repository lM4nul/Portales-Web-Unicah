const planICC = {
    title: "Plan de Estudio ICC",
    bloques: [
        {
            name: "I",
            asignaturas: [
                { codigo: 'ES101', nombre: "Español", creditos: 3, requisitos: [] },
                { codigo: 'MT101', nombre: "Matemáticas", creditos: 4, requisitos: [] },
                { codigo: 'IF101', nombre: "Introducción a las Ciencias de la Computación", creditos: 3, requisitos: [] },
                { codigo: 'SC101', nombre: "Sociología", creditos: 3, requisitos: [] },
                { codigo: 'FI101', nombre: "Filosofía", creditos: 3, requisitos: [] },
            ]
        },
        {
            name: "II",
            asignaturas: [
                { codigo: 'ES201', nombre: "Expresión Oral y Escrita", creditos: 3, requisitos: ['ES101'] },
                { codigo: 'MT201', nombre: "Pre Cálculo", creditos: 4, requisitos: ['MT101'] },
                { codigo: 'IF201', nombre: "Fundamentos y Lógica de Programación", creditos: 4, requisitos: ['IF101'] },
                { codigo: 'HS101', nombre: "Historia de Honduras", creditos: 3, requisitos: [] },
                { codigo: 'CS201', nombre: "El Hombre Frente a la Vida", creditos: 3, requisitos: [] },
            ]
        },
        {
            name: "III",
            asignaturas: [
                { codigo: 'MT302', nombre: "Estadística I", creditos: 4, requisitos: ['MT101'] },
                { codigo: 'MT301', nombre: "Cálculo I", creditos: 4, requisitos: ['MT201'] },
                { codigo: 'IF301', nombre: "Programación Estructurada I", creditos: 3, requisitos: ['IF201'] },
                { codigo: 'MT303', nombre: "Estructuras Discretas", creditos: 3, requisitos: ['IF201'] },
                { codigo: 'EL101', nombre: "Electiva I – Área de Ciencias Naturales", creditos: 3, requisitos: [] },
            ]
        },
        {
            name: "IV",
            asignaturas: [
                { codigo: 'MI101', nombre: "Métodos y Técnicas de Investigación", creditos: 3, requisitos: ['MT302'] },
                { codigo: 'MT401', nombre: "Cálculo II", creditos: 4, requisitos: ['MT301'] },
                { codigo: 'IF401', nombre: "Programación Estructurada II", creditos: 3, requisitos: ['IF301'] },
                { codigo: 'FS101', nombre: "Física I", creditos: 3, requisitos: ['MT101'] },
                { codigo: 'AD101', nombre: "Administración", creditos: 3, requisitos: [] },
            ]
        },
        {
            name: "V",
            asignaturas: [
                { codigo: 'BD101', nombre: "Base de Datos I", creditos: 3, requisitos: [] },
                { codigo: 'CT101', nombre: "Contabilidad", creditos: 3, requisitos: [] },
                { codigo: 'PDV101', nombre: "Programación en Entornos de Desarrollo Visual", creditos: 3, requisitos: ['IF401'] },
                { codigo: 'PE101', nombre: "Principios de Electrónica", creditos: 3, requisitos: ['FS101'] },
                { codigo: 'MF101', nombre: "Matemáticas Financieras", creditos: 3, requisitos: ['MT101'] },
            ]
        },
        {
            name: "VI",
            asignaturas: [
                { codigo: 'BD102', nombre: "Base de Datos II", creditos: 3, requisitos: ['BD101'] },
                { codigo: 'ADS101', nombre: "Análisis y Diseño de Sistemas", creditos: 3, requisitos: [] },
                { codigo: 'RN101', nombre: "Redes I", creditos: 3, requisitos: [] },
                { codigo: 'CL101', nombre: "Circuitos Lógicos", creditos: 3, requisitos: ['PE101'] },
                { codigo: 'ET101', nombre: "Ética Profesional", creditos: 3, requisitos: ['CS201'] },
            ]
        },
        {
            name: "VII",
            asignaturas: [
                { codigo: 'BD201', nombre: "Base de Datos Multidimensional", creditos: 3, requisitos: ['BD102'] },
                { codigo: 'PM101', nombre: "Programación Multiplataforma", creditos: 3, requisitos: [] },
                { codigo: 'DS101', nombre: "Desarrollo de Software", creditos: 4, requisitos: ['ADS101'] },
                { codigo: 'RN201', nombre: "Redes II", creditos: 4, requisitos: ['RN101'] },
                { codigo: 'SA101', nombre: "Sistemas Automatizados", creditos: 3, requisitos: ['CL101'] },
            ]
        },
        {
            name: "VIII",
            asignaturas: [
                { codigo: 'SIB101', nombre: "Sistemas Inteligentes para Negocios", creditos: 3, requisitos: ['BD201'] },
                { codigo: 'EL201', nombre: "Electiva II – Área de Arte o Deporte", creditos: 3, requisitos: [] },
                { codigo: 'IS101', nombre: "Implementación de Sistemas de Software", creditos: 4, requisitos: ['DS101'] },
                { codigo: 'SO101', nombre: "Sistemas Operativos I", creditos: 3, requisitos: [] },
                { codigo: 'MC101', nombre: "Microcontroladores", creditos: 3, requisitos: [] },
            ]
        },
        {
            name: "IX",
            asignaturas: [
                { codigo: 'DW101', nombre: "Desarrollo de Portales Web I", creditos: 3, requisitos: ['PM101'] },
                { codigo: 'PMV101', nombre: "Programación Móvil I", creditos: 3, requisitos: [] },
                { codigo: 'GCT101', nombre: "Gestión de la Calidad Total", creditos: 3, requisitos: [] },
                { codigo: 'SO201', nombre: "Sistemas Operativos II", creditos: 3, requisitos: ['SO101'] },
                { codigo: 'SH101', nombre: "Seminario de Hardware y Electricidad", creditos: 3, requisitos: ['MC101'] },
            ]
        },
        {
            name: "X",
            asignaturas: [
                { codigo: 'DW102', nombre: "Desarrollo de Portales Web II", creditos: 3, requisitos: ['DW101'] },
                { codigo: 'PMV102', nombre: "Programación Móvil II", creditos: 3, requisitos: ['PMV101'] },
                { codigo: 'CEC101', nombre: "Control Estadístico de la Calidad", creditos: 3, requisitos: ['GCT101'] },
                { codigo: 'GTI101', nombre: "Gestión y Estándares de Tecnología de Información", creditos: 3, requisitos: [] },
                { codigo: 'DSI101', nombre: "Doctrina Social de la Iglesia", creditos: 3, requisitos: ['CS201'] },
            ]
        },
        {
            name: "XI",
            asignaturas: [
                { codigo: 'NBW101', nombre: "Negocios Web", creditos: 3, requisitos: ['DW102'] },
                { codigo: 'PB101', nombre: "Programación de Negocios", creditos: 3, requisitos: [] },
                { codigo: 'PDMC101', nombre: "Planeación y Diseño de un Modelo de Calidad", creditos: 3, requisitos: ['CEC101'] },
                { codigo: 'SIGR101', nombre: "Seguridad Informática y Gestión del Riesgo", creditos: 3, requisitos: ['GTI101'] },
                { codigo: 'AEC101', nombre: "Administración Estratégica del Cómputo", creditos: 3, requisitos: ['GTI101'] },
            ]
        },
        {
            name: "XII",
            asignaturas: [
                { codigo: 'STS101', nombre: "Seminario Taller de Software", creditos: 3, requisitos: ['NBW101'] },
                { codigo: 'GPI101', nombre: "Gestión de Proyectos Informáticos", creditos: 3, requisitos: ['PB101'] },
                { codigo: 'BDG101', nombre: "Big Data", creditos: 3, requisitos: ['SIB101'] },
                { codigo: 'ASI101', nombre: "Auditoría de Sistemas de Información", creditos: 3, requisitos: ['SIGR101'] },
                { codigo: 'EL301', nombre: "Electiva III – Área Especializante", creditos: 3, requisitos: [] },
            ]
        },
        {
            name: "XIII",
            asignaturas: [
                { codigo: 'PP101', nombre: "Práctica Profesional", creditos: null, requisitos: [] },
            ]
        },
    ]
}
document.addEventListener("DOMContentLoaded", () => {
    const planContainer = document.getElementById("planIccContainer");
    const planEstudioInstance = new PlanDeEstudio(planContainer, planICC);
    planEstudioInstance.createUX();
});

class PlanDeEstudio {
    container = null;
    structure = null;
    nodes = null;
    constructor(container, planStructure) {
        this.container = container;
        this.structure = planStructure;
        this.nodes = {};
        this.container.classList.add("plancontainer");
        let titleElement = document.createElement("H1");
        titleElement.innerHTML = this.structure.title;
        this.container.appendChild(
            titleElement
        );
    }

    createUX() {
        /*
            x 1. Recorrer por los Bloque para dibujar contenedores del los bloques
            2. De Forma Recursiva por Bloque se generará los nodos por cada clase
            3. Enlazar los eventos mouse over y mouse leave para agregar clases a los nodos.
        */

        if (!this.structure) {
            throw Error("Es necesario establecer un plan de estudio JSON");
        }
        if (!this.structure.bloques) {
            throw Error("El plan no tiene bloques");
        }
        let bloquesUX = this.structure.bloques.map(
            (bloque) => {
                const contendorBloque = document.createElement("div");
                contendorBloque.classList.add("bloque");
                const labelBloque = document.createElement("div");
                labelBloque.innerHTML = bloque.name;
                labelBloque.classList.add("bloque_label");
                const asignaturasBloque = this.createAsignaturasUX(bloque.asignaturas);
                contendorBloque.appendChild(labelBloque);
                contendorBloque.appendChild(asignaturasBloque);
                return contendorBloque;
            }
        );
        bloquesUX.forEach(element => {
            this.container.appendChild(element);
        });
    }

    createAsignaturasUX(asignaturas) {
        const asignaturasBloque = document.createElement("div");
        asignaturasBloque.classList.add("bloque_clases");

        asignaturas.forEach(
            (asignatura) => {
                const claseUX = document.createElement("div");
                claseUX.classList.add("bloqueClase");
                const codLabel = document.createElement("span");
                const nameLabel = document.createElement("span");
                const crdLabel = document.createElement("span");
                codLabel.classList.add('code');
                nameLabel.classList.add('name');
                crdLabel.classList.add('credits');
                codLabel.innerHTML = asignatura.codigo;
                nameLabel.innerHTML = asignatura.nombre;
                crdLabel.innerHTML = asignatura.creditos;
                if (!this.nodes[asignatura.codigo]) {
                    this.nodes[asignatura.codigo] = {
                        node: claseUX,
                        requisitos: [],
                        apertura: []
                    }
                    asignatura.requisitos.forEach(r => {
                        this.nodes[asignatura.codigo].requisitos.push(this.nodes[r].node)
                        this.nodes[r].apertura.push(this.nodes[asignatura.codigo].node)
                    }
                    );
                }
                const currentNode  = this.nodes[asignatura.codigo];
                // registrar los eventos que se requieren cloujure
                claseUX.addEventListener("mouseover", (e) => {
                    if (e.target.tagName.toUpperCase() !== 'SPAN') {
                        currentNode.requisitos.forEach( n => n.classList.add("clase_requisito"));
                        currentNode.apertura.forEach( n => n.classList.add("clase_apertura"));
                    }
                });
                claseUX.addEventListener("mouseleave", (e) => {
                    if (e.target.tagName.toUpperCase() !== 'SPAN') {
                        currentNode.requisitos.forEach( n => n.classList.remove("clase_requisito"));
                        currentNode.apertura.forEach( n => n.classList.remove("clase_apertura"));
                    }
                });
                claseUX.appendChild(codLabel);
                claseUX.appendChild(nameLabel);
                claseUX.appendChild(crdLabel);
                asignaturasBloque.appendChild(claseUX);
            }
        );

        return asignaturasBloque;
    }
}