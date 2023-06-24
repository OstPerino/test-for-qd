export interface IHotSpot {
  type: string;
  entity: IEntity;
}

interface IEntity {
  geometry: IGeometry;
  properties: IProperties;
}

interface IGeometry {
  coordinates: Array<number>;
  type: string;
}

interface IProperties {
  name: string;
}