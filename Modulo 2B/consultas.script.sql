--Listar las pistas (tabla Track) con precio mayor o igual a 1€
select 
	T.trackid,
	T.name,
	T.unitprice
from track T
where unitprice >= 1

--Listar las pistas de más de 4 minutos de duración
select 
	T.trackid,
	T.name,
	T.milliseconds
from track T
where T.milliseconds > 240000

--Listar las pistas que tengan entre 2 y 3 minutos de duración
select 
	T.trackid,
	T.name,
	T.milliseconds
from track T
where T.milliseconds between 120000 and 180000

--Listar las pistas que uno de sus compositores (columna Composer) sea Mercury
select 
	T.trackid,
	T.name,
	T.composer
from track T
where T.composer ilike '%mercury%'

--Calcular la media de duración de las pistas (Track) de la plataforma
select 
	ROUND(AVG(T.milliseconds), 0) as duracion_ms,
	ROUND(AVG(T.milliseconds)/60000, 2) as duracion_min
from track T

--Listar los clientes (tabla Customer) de USA, Canada y Brazil
select 
	C.firstname,
	C.lastname,
	C.country
from customer C
where C.country in ('Brazil', 'Canada', 'USA')

--Listar todas las pistas del artista 'Queen' (Artist.Name = 'Queen')
select 
	T.trackid,
	T.name as cancion,
	AL.title as album,
	AR.name as artista
from track T
join album AL on T.albumid = AL.albumid
join artist AR on AL.artistid = AR.artistid
where AR.name = 'Queen'

--Listar las pistas del artista 'Queen' en las que haya participado como compositor David Bowie
select 
	T.trackid,
	T.name as cancion,
	T.composer as compositor,
	AL.title as album,
	AR.name as artista
from track T
join album AL on T.albumid = AL.albumid
join artist AR on AL.artistid = AR.artistid
where AR.name = 'Queen'
and T.composer ilike '%David Bowie%'

--Listar las pistas de la playlist 'Heavy Metal Classic'
select 
	T.trackid, 
	T.name as cancion, 
	P.name as playlist
from track T
join playlisttrack PT on T.trackid = PT.trackid
join playlist P on PT.playlistid = P.playlistid
where P.name = 'Heavy Metal Classic'

--Listar las playlist junto con el número de pistas que contienen
select 
	P.name as playlist,
	count(T.trackid) as canciones
from track T
join playlisttrack PT on T.trackid = PT.trackid
join playlist P on PT.playlistid = P.playlistid
group by playlist
order by canciones desc

--Listar las playlist (sin repetir ninguna) que tienen alguna canción de AC/DC
select 
	distinct P.name as playlist
from track T
join playlisttrack PT on T.trackid = PT.trackid
join playlist P on PT.playlistid = P.playlistid
join album AL on T.albumid = AL.albumid
join artist AR on AL.artistid = AR.artistid
where AR.name = 'AC/DC'

--Listar las playlist que tienen alguna canción del artista Queen, junto con la cantidad que tienen
select 
	P.name as playlist,
	count(T.trackid) as canciones
from track T
join playlisttrack PT on T.trackid = PT.trackid
join playlist P on PT.playlistid = P.playlistid
join album AL on T.albumid = AL.albumid
join artist AR on AL.artistid = AR.artistid
where AR.name = 'Queen'
group by P.name

--Listar las pistas que no están en ninguna playlist
select 
	T.trackid as id,
	T.name as cancion,
	P.name as playlist
from track T
left join playlisttrack PT on T.trackid = PT.trackid
left join playlist P on PT.playlistid = P.playlistid
where P.playlistid is null

--Listar los artistas que no tienen album
select AR.artistid, AR.name, AL.albumid 
from artist AR
left join album AL on AR.artistid = AL.artistid
where AL.artistid is null

--Listar los artistas con el número de albums que tienen 
select AR.artistid, AR.name, count(AL.albumid) as discos
from artist AR
left join album AL on AR.artistid = AL.artistid
group by AR.name, AR.artistid
order by discos desc
