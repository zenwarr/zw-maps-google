/// <reference types="googlemaps" />
import { PointData, MapOptions, Map } from '@zcomp/maps';
import { ComponentFactory } from '@zcomp/base';
export declare const DefaultOptions: MapOptions;
export interface GoogleMapPointData extends PointData {
    marker: google.maps.Marker | null;
    infoWindow: google.maps.InfoWindow | null;
}
export declare class GoogleMap extends Map {
    constructor(root: Element, options: MapOptions);
    /** Protected area **/
    protected _addMarker(point: GoogleMapPointData): void;
    protected _parsePoint(elem: Element): GoogleMapPointData;
    protected _panToPoint(point: GoogleMapPointData): void;
    protected _gmap: google.maps.Map;
}
export declare const GoogleMapFactory: ComponentFactory<GoogleMap, MapOptions>;
