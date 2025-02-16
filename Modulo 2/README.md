# Consultas en MongoDB

## Introducción

En esta base de datos puedes encontrar un montón de alojamientos y sus reviews, esto está sacado de hacer webscrapping.

**Pregunta**: Si montaras un sitio real, ¿Qué posibles problemas potenciales les ves a cómo está almacenada la información?

El principal sería que si el número de reviews aumenta, al estar embebidas en el documento, podría hacer que se sobrepasase el límite de 16MB. Además, el rendimiento puede verse afectado ya que al consultar el documento se van a cargar todas las reviews.

## Consultas

### Saca en una consulta cuántos alojamientos hay en España

```js
db.listingsAndReviews.countDocuments({ "address.country": "Spain" });
```

### Lista los 10 primeros alojamientos de España

- Ordenados por precio de forma ascendente.
- Sólo muestra: nombre, precio, camas y la localidad (`address.market`).

```js
db.listingsAndReviews
  .find(
    { "address.country": "Spain" },
    { _id: 0, name: 1, price: 1, beds: 1, "address.market": 1 }
  )
  .sort({ price: 1 })
  .limit(10);
```

## Filtrando

### Viaje para 4 personas cómodamente

- 4 camas.
- Dos cuartos de baño o más.
- Sólo muestra: nombre, precio, camas y baños.

```js
db.listingsAndReviews.find(
  {
    beds: { $eq: 4 },
    bathrooms: { $gte: 2 },
  },
  { _id: 0, name: 1, price: 1, beds: 1, bathrooms: 1 }
);
```

### Conexión WiFi añadida

- A los requisitos anteriores, añadir que tenga Wifi.
- Sólo muestra: nombre, precio, camas, baños y servicios (`amenities`).

```js
db.listingsAndReviews.find(
  {
    beds: { $eq: 4 },
    bathrooms: { $gte: 2 },
    amenities: { $all: ["Wifi"] },
  },
  { _id: 0, name: 1, price: 1, beds: 1, bathrooms: 1, amenities: 1 }
);
```

### Se permite mascota

- Añadir "Pets allowed" a los requisitos anteriores.
- Sólo muestra: nombre, precio, camas, baños y servicios (`amenities`).

```js
db.listingsAndReviews.find(
  {
    beds: { $eq: 4 },
    bathrooms: { $gte: 2 },
    amenities: { $all: ["Wifi", "Pets allowed"] },
  },
  { _id: 0, name: 1, price: 1, beds: 1, bathrooms: 1, amenities: 1 }
);
```

## Agregaciones

### Alojamientos en España con nombre, localidad y precio

```js
db.listingsAndReviews.aggregate([
  { $match: { "address.country": "Spain" } },
  {
    $project: {
      _id: 0,
      name: 1,
      city: "$address.market",
      price: 1,
    },
  },
]);
```

### Alojamientos por país

```js
db.listingsAndReviews.aggregate([
  { $group: { _id: "$address.country", rooms: { $sum: 1 } } },
  { $project: { _id: 0, country: "$_id", rooms: 1 } },
]);
```

### Precio medio por país

```js
db.listingsAndReviews.aggregate([
  { $group: { _id: "$address.country", average_price: { $avg: "$price" } } },
  {
    $project: {
      _id: 0,
      country: "$_id",
      average_price: { $round: [{ $toDouble: "$average_price" }, 2] },
    },
  },
]);
```

### Top 5 de alojamientos más caros en España

- Nombre, precio, habitaciones, camas, baños, ciudad y servicios en un string.

```js
db.listingsAndReviews.aggregate([
  { $match: { "address.country": "Spain" } },
  { $sort: { price: -1 } },
  { $limit: 5 },
  {
    $project: {
      _id: 0,
      name: 1,
      price: { $round: [{ $toDouble: "$price" }, 0] },
      bedrooms: 1,
      bathrooms: { $round: [{ $toDouble: "$bathrooms" }, 0] },
      beds: 1,
      city: "$address.market",
      amenities: {
        $reduce: {
          input: "$amenities",
          initialValue: "",
          in: {
            $cond: [
              { $eq: ["$$value", ""] },
              "$$this",
              { $concat: ["$$value", ", ", "$$this"] },
            ],
          },
        },
      },
    },
  },
]);
```
