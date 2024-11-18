import React from 'react';
import { Calendar, Zap, Phone, Computer, CreditCard, Code, Cpu, Wifi, Box, Sun, DollarSign, FileText, Hammer } from 'lucide-react';

interface TimelineEvent {
  fecha: string;
  comentario: string;
  observacion: string;
  comentarioAdicional: string;
  icon: React.ElementType;
}

const timelineEvents: TimelineEvent[] = [
  {
    fecha: '1987',
    comentario: 'Apertura de Ferreteria Alemana',
    observacion: 'Sin energía eléctrica',
    comentarioAdicional: 'La nevera en la vecindad solo arranca con elevador',
    icon: Calendar,
  },
  {
    fecha: '1992',
    comentario: 'Se adquiere con dificultad una línea telefónica',
    observacion: 'Se factura manual y con máquina de escribir mecánica',
    comentarioAdicional: '',
    icon: Phone,
  },
  {
    fecha: '1997',
    comentario: 'Se adquiere un PC',
    observacion: 'Se inicia facturar con Windows y Word',
    comentarioAdicional: '',
    icon: Computer,
  },
  {
    fecha: '1998',
    comentario: 'Se acepta pagos a través de Conavitel',
    observacion: 'Inicio de dinero plástico',
    comentarioAdicional: '',
    icon: CreditCard,
  },
  {
    fecha: '2001',
    comentario: 'Se construye un software propio para Ferreteria Alemana',
    observacion: '',
    comentarioAdicional: '',
    icon: Code,
  },
  {
    fecha: '2003',
    comentario: 'Hay serios problemas del fluido eléctrico',
    observacion: 'Se adquiere una planta eléctrica, también una UPS grande para asegurar la operatividad',
    comentarioAdicional: '',
    icon: Zap,
  },
  {
    fecha: '2004',
    comentario: 'El internet entra poco a poco al mundo de la Ferreteria Alemana',
    observacion: '',
    comentarioAdicional: '',
    icon: Wifi,
  },
  {
    fecha: '2006',
    comentario: 'Se adquiere un transformador para estabilizar el fluido eléctrico',
    observacion: '',
    comentarioAdicional: '',
    icon: Cpu,
  },
  {
    fecha: '2014',
    comentario: 'Sanción de la Ley 1715 de 2014',
    observacion: 'Regula la integración de energías renovables no convencionales al sistema energético nacional',
    comentarioAdicional: 'Establece incentivos para la inversión en energías renovables, como la energía solar',
    icon: Sun,
  },
  {
    fecha: '2018',
    comentario: 'Resolución 030 de 2018 de la CREG',
    observacion: 'Los colombianos pueden inyectar energía a la red de fluido eléctrico de las ciudades',
    comentarioAdicional: 'Siempre y cuando no supere los 1.000 kWh de capacidad eléctrica',
    icon: Zap,
  },
  {
    fecha: '2021',
    comentario: 'El costo de energía eléctrica sube frecuentemente',
    observacion: 'Especialmente en la costa',
    comentarioAdicional: 'Se inician estudios sobre un proyecto de Energía Solar',
    icon: DollarSign,
  },
  {
    fecha: '2022',
    comentario: 'La factura de energía Ferreteria Alemana sobrepasa 2.000.000 de pesos',
    observacion: '',
    comentarioAdicional: '',
    icon: FileText,
  },
  {
    fecha: '2023',
    comentario: 'La factura de energía Ferreteria Alemana sobrepasa 3.000.000 de pesos',
    observacion: 'Serio estudio de proyecto de Energía Solar para Ferreteria Alemana',
    comentarioAdicional: '',
    icon: Sun,
  },
  {
    fecha: '2024 Enero',
    comentario: 'Se firma contrato de instalación, legalización y mantenimiento de energía solar con Greendipity',
    observacion: 'Se pretende generar el 100% de la energía que requiere Ferreteria Alemana',
    comentarioAdicional: '',
    icon: FileText,
  },
  {
    fecha: '2024 Febrero',
    comentario: 'Inicio trabajos en la estructura metálica para los paneles',
    observacion: '',
    comentarioAdicional: '',
    icon: Hammer,
  },
  {
    fecha: '2024 Marzo',
    comentario: 'Inicio de construcción de vitrina energía solar visible al público',
    observacion: '',
    comentarioAdicional: '',
    icon: Box,
  },
  {
    fecha: '2024 Octubre',
    comentario: 'Inicio de pruebas en generar energía',
    observacion: '',
    comentarioAdicional: '',
    icon: Zap,
  },
  {
    fecha: '2024 Noviembre',
    comentario: 'Pendiente',
    observacion: '',
    comentarioAdicional: '',
    icon: Calendar,
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-500 to-blue-500"></div>
      
      {timelineEvents.map((event, index) => {
        const Icon = event.icon;
        const isLeft = index % 2 === 0;
        
        return (
          <div key={index} className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center mb-12`}>
            <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <div className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-t-4 ${index < 13 ? 'border-yellow-500' : 'border-blue-500'}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-bold ${isLeft ? 'order-2' : 'order-1'}`}>{event.fecha}</h3>
                  <Icon className={`w-6 h-6 ${index < 13 ? 'text-yellow-500' : 'text-blue-500'} ${isLeft ? 'order-1' : 'order-2'}`} />
                </div>
                <p className="text-gray-800 font-medium mb-2">{event.comentario}</p>
                {event.observacion && (
                  <p className="text-gray-600 text-sm mb-2">{event.observacion}</p>
                )}
                {event.comentarioAdicional && (
                  <p className="text-gray-500 text-xs italic">{event.comentarioAdicional}</p>
                )}
              </div>
            </div>
            
            <div className="relative flex items-center justify-center w-8">
              <div className={`w-4 h-4 rounded-full ${index < 13 ? 'bg-yellow-500' : 'bg-blue-500'} z-10`}></div>
            </div>
            
            <div className="w-1/2"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;