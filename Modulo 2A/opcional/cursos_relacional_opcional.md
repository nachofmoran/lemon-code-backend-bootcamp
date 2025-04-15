# Plataforma de cursos. Opcional.

Se proponen los siguientes cambios frente al modelo obligatorio:

## **1. cursos**

- Se añade el campo `visualizaciones` que será un campo calculado con la suma de las visualizaciones de todos los vídeos que componen cada curso.

## **2. usuario_curso**

- Se ha añadido el campo `progreso` a esta tabla para medir el progreso del alumno en cada curso.

- También se ha incluido el campo `fecha_compra`, ya que puede haber usuarios que compren cursos pero no sean suscriptores. Para ver si un usuario es suscriptor habría que ir a la tabla usuarios y mirar el campo `suscriptor` que ya estaba incluido en el modelo básico.

## **3. recursos**

- Se mete el campo `publico`, un booleano que determina si ese recurso se puede ver de forma gratuita o es solo para suscriptores/compradores.

- Se añade el campo `visualizaciones` para llevar la cuenta de las visualizaciones de cada video. También se podría rellenar para otros recursos que no fueran vídeos o dejarse vacío o con otro valor.

## **4. tematicas**

- Se ha cambiado el campo `nombre` de esta tabla por una jerarquía de tres niveles con los campos `tematica_n1`, `tematica_n2` y `tematica_n3`. No es la forma más escalable ni dinámica pero creo que para este caso concreto de uso es suficiente.

## **5. tags y curso_tag**

- Se han incluido dos tablas en el modelo para poder mostrar la nube de tags de cada curso:
  - **tags:** Tabla de lookup con los nombres de todos los tags.
  - **curso_tag:** Tabla de relación entre las tablas `tag` y `cursos` que contendrá los identificadores de los tags que aplican a cada curso.
