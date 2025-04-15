# Plataforma de cursos

Se propone un modelo con las siguientes tablas:

- **cursos**
- **usuario_curso**
- **usuarios**
- **lecciones**
- **recursos**
- **tipo_recurso**
- **tematicas**
- **autores**
- **autor_red_social**
- **redes_sociales**

## **1. cursos**

### **Campos:**

- **id_curso**
- **titulo:** Título del curso.
- **descripcion:** Descripción del curso.
- **fecha_publicacion:** Fecha de publicación del curso.

### **Consideraciones:**

Tabla con los datos básicos de cada curso. Al tener una relacion muchos a muchos con la tabla de usuarios utilizamos la tabla de relación `usuario_curso`.

## **2. usuario_curso**

### **Campos:**

- **id_curso**
- **id_usuario**

### **Consideraciones:**

Tabla de relación entre `cursos` y `usuarios`.

## **3. usuarios**

### **Campos:**

- **id_usuario**
- **nombre:** Nombre del usuario.
- **apellidos:** Apellidos del usuario.
- **email:** Email del usuario.
- **suscriptor:** Booleano que determina si un usuario es suscriptor o no.

### **Consideraciones:**

Tabla con los datos de los usuarios.

## **4. lecciones**

### **Campos:**

- **id_leccion**
- **id_curso:** Identificador del curso al que pertenece la lección.
- **titulo:** Título de la lección.
- **descripción:** Descripción de la lección.

### **Consideraciones:**

Tabla con las lecciones de cada curso.

## **5. recursos**

### **Campos:**

- **id_recurso**
- **id_lección:** Identificador de la lección a la que pertenece el recurso.
- **titulo:** Título del recurso.
- **id_tematica:** Identificador de la temática del recurso.
- **autor:** Autor del recurso.
- **id_tipo_recurso:** Identificador del tipo de recurso.

### **Consideraciones:**

En vez de tener una tabla para vídeos y otra para artículos he optado por tener una tabla de recursos que pueden ser de tipo video o artículo, de tal forma que si en el futuro se quiere añadir otro tipo de recurso sea más fácil incluirlo.

Los autores de cada curso se obtendrán del campo autor de cada uno de los recursos que forma parte de una lección que pertenece a su vez a un curso.

## **6. tipo_recurso**

### **Campos:**

- **id_tipo_recurso**
- **nombre:** Nombre del tipo de recurso. Inicialmente `video` o `articulo`.

### **Consideraciones:**

Tabla de lookup con el nombre de cada tipo de recurso.

## **7. tematicas**

### **Campos:**

- **id_tematica**
- **nombre:** Temática del recurso (DevOps, Backend, Frontend etc).

### **Consideraciones:**

Tabla de lookup con el nombre de cada temática o categoría del recurso.

## **8. autores**

### **Campos:**

- **id_autor**
- **nombre:** Nombre del autor.
- **biografia:** Biografía del autor.
- **foto:** Enlace a la foto del autor.

### **Consideraciones:**

Tabla con los datos básicos cada autor. Para completar la información he utilizado una tabla intermedia `autor_red_social` que guarda el enlace específico de ese autor en una determinada red social y `redes_sociales` que se trata de una tabla de lookup con la información de cada red social y un enlace a su icono.

## **9. autor_red_social**

### **Campos:**

- **id_autor**
- **id_rrss**
- **link:** Enlace al perfil de ese autor en esa red social.

### **Consideraciones:**

Tabla intermedia con los enlaces de cada autor a cada red social.

## **10. redes_sociales**

### **Campos:**

- **id_rrss**
- **nombre:** Nombre de la red social.
- **icono:** Enlace al icono de la red social.

### **Consideraciones:**

Tabla de lookup con los datos de cada red social.
