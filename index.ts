import { PointData, MapOptions, Map, Coords } from 'zw-maps';

export interface GoogleMapPointData extends PointData {
  marker: google.maps.Marker|null;
  infoWindow: google.maps.InfoWindow|null;
}

export class GoogleMap extends Map {
  constructor(root: Element, options?: MapOptions) {
    super(root, options);

    if (!(window as any).google || !google.maps) {
      throw new Error('Google maps api is not detected, make sure you have plugged the scripts in');
    }

    if (this.mapContainer) {
      let center = this.initialCenter as Coords;
      this._gmap = new google.maps.Map(this.mapContainer, {
        center: {
          lat: center.lat,
          lng: center.long
        },
        zoom: this.initialZoom,
        scrollwheel: !this._options.disableScrollZoom
      });

      for (let q = 0; q < this._points.length; ++q) {
        let point = this._points[q] as GoogleMapPointData;
        this._addMarker(point);
      }
    }
  }

  /** Protected area **/

  protected _addMarker(point: GoogleMapPointData): void {
    let markerOpts: google.maps.MarkerOptions = {
      position: {
        lat: point.lat,
        lng: point.long
      },
      map: this._gmap,
      title: point.title,
    };

    let templ = point.template ? this.getPointTemplate(point.template) : null;
    if (templ && templ.imageUrl) {
      markerOpts.icon = {
        url: templ.imageUrl,
        size: new google.maps.Size(templ.imageWidth || 0, templ.imageHeight || 0),
        anchor: new google.maps.Point(templ.imageAnchorX || 0, templ.imageAnchorY || 0)
      }
    }

    point.marker = new google.maps.Marker(markerOpts);

    if (point.balloonContent) {
      point.infoWindow = new google.maps.InfoWindow({
        content: point.balloonContent
      });
      point.marker.addListener('click', () => {
        if (point.infoWindow && point.marker) {
          point.infoWindow.open(this._gmap, point.marker);
        }
      });
    }
  }

  protected _parsePoint(elem: Element): GoogleMapPointData {
    let point = super._parsePoint(elem) as GoogleMapPointData;
    point.marker = null;
    point.infoWindow = null;
    return point;
  }

  protected _panToPoint(point: GoogleMapPointData): void {
    if (point && this._gmap) {
      this._gmap.panTo(new google.maps.LatLng(point.lat, point.long));
    }
  }

  protected _gmap: google.maps.Map;
}
