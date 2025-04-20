--Listar las pistas ordenadas por el número de veces que aparecen en playlists de forma descendente
select 
	T.trackid as id,
	T.name as cancion,
	count(P.playlistid) as canciones
from track T
left join playlisttrack PT on T.trackid = PT.trackid
left join playlist P on PT.playlistid = P.playlistid
group by T.trackid, T.name
order by canciones desc

--Listar las pistas más compradas (la tabla InvoiceLine tiene los registros de compras)
select 
	I.trackid, 
	T.name,
	sum(I.quantity) as unidades 
from track T
join invoiceline I on T.trackid = I.trackid
group by I.trackid, T.name
order by unidades desc

--Listar los artistas más comprados
select 
	AR.artistid, 
	AR.name,
	sum(I.quantity) as unidades 
from track T
join invoiceline I on T.trackid = I.trackid
join album AL on T.albumid = AL.albumid
join artist AR on AL.artistid = AR.artistid
group by AR.artistid, AR.name
order by unidades desc

--Listar las pistas que aún no han sido compradas por nadie
select 
	T.trackid, 
	T.name
from track T
left join invoiceline I on T.trackid = I.trackid
where I.trackid is null

--Listar los artistas que aún no han vendido ninguna pista
select 
	artistid, 
	name as artista
from artist
where artistid not in (
	select 
		distinct AR.artistid 
	from track T
	join invoiceline I on T.trackid = I.trackid
	join album AL on T.albumid = AL.albumid
	join artist AR on AL.artistid = AR.artistid
)


