export type Bike = {
  id: number;
  tipo: string;
};

export type Ruta = {
  id: number;
  ubicacion: string;
  fecha: string;
  latitud: number;
  longitud: number;
  bike: Bike;
};
