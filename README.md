# Usage

```
npm i --save zw-maps-google
```

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY" type="text/javascript" />
```

Note that `async` and `defer` attributes on `script` tag for Google Maps API library are not supported yet.

```js
let Map = require('zw-maps').MapFactory;
let GoogleMap = require('zw-maps-google').GoogleMap;

MapFactory.init(GoogleMap);
```
