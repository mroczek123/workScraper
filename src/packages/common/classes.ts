export class GeoPosition {
  latitude: number;
  longitude: number;

  constructor(data: GeoPosition) {
    this.latitude = data.latitude;
    this.longitude = data.longitude;
  }
}
