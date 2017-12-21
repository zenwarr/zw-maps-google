# Usage

```
npm i --save @zcomp/maps-google
```

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY" type="text/javascript" />
```

Note that `async` and `defer` attributes on `script` tag for Google Maps API library are not supported yet.

```js
const GoogleMapFactory = require('@zcomp/maps-google').GoogleMapFactory;

GoogleMapFactory.init();
```
