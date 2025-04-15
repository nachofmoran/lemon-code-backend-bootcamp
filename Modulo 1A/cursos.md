# Plataforma de cursos

Se propone un modelo con las siguientes colecciones:

- **Cursos**
- **Lecciones**
- **Autores**
- **Cache Home**

---

## **1. Cursos**

### **Campos:**

- **id_curso**
- **titulo:** Título del curso.
- **tematica:** Categoría del curso (DevOps, Backend, Frontend etc).
- **fecha_publicacion:** Fecha de publicación del curso.
- **numero_visualizaciones:** Número de visualizaciones del curso.
- **autores:** Array de objetos con el id y el nombre de los autores del curso.
- **lecciones:** Array de objetos con el id, título y descripción del curso.

### **Consideraciones:**

El campo `fecha_publicacion` lo usamos para luego poder mostrar en la Home los últimos cursos publicados.  
Por su parte, como el número total de cursos puede llegar a 1000 cursos se ha decidido utilizar los campos `tematica` y `numero_visualizaciones` para publicar en la Home solo los cursos más relevantes de cada categoría.  
Se aplicará el patrón `approximation pattern` para actualizar el número de visualizaciones, ya que no es importante tener el contador de visitas en tiempo real, se puede hacer cada cierto tiempo.

Además, se ha decidido aplicar el patrón `extended ref` tanto para los autores como para las lecciones duplicando campos de estas dos colecciones en la colección de cursos:

- En la colección de **autores** porque se necesita que la página de cursos cargue rápido el nombre del autor y no es necesario tener todos los detalles de primeras. La página de autor se va a visitar menos y no es información que vaya a cambiar a menudo.
- En la colección de **lecciones** se ha incluido un array de objetos con el título y la descripción de la lección dentro de la colección de cursos para poder mostrar rápido esos campos ya que se ha decidido no incluir todos los detalles de las lecciones dentro de cada curso y mantenerlas en otra colección. De esta forma será más fácil en el futuro si se decide utilizar una misma lección para más de un curso.

---

## **2. Lecciones**

### **Campos:**

- **id_leccion**
- **titulo:** Título de la lección.
- **videos:** Array de objetos con el título del vídeo y el GUID o url de cada vídeo.
- **articulos:** Array de objetos con el título y el id o url de cada artículo.

### **Consideraciones:**

Como se ha comentado antes, se crea esta colección y no se incluyen dentro de cada curso para facilitar que en el futuro se pueda usar una misma lección para varios cursos.  
Se aplica también aquí el patrón `extended ref`, ya que uno de los requerimientos es mostrar el autor de cada vídeo.  
Duplicamos el nombre del autor para tenerlo disponible rápido, teniendo en cuenta que además el autor de un vídeo es algo que puede cambiar de forma muy puntual.

---

## **3. Autores**

### **Campos:**

- **id_autor**
- **nombre:** Nombre del autor.
- **bio:** Biografía del autor.
- **redes_sociales:** Array con los links de las redes sociales del autor.
- **cursos:** Array de objetos con el id, título y descripción de cada curso del autor.
- **foto:** Link a la foto del autor.

### **Consideraciones:**

Aquí de nuevo se ha aplicado el patrón `extended ref` y duplicamos el título y la descripción de cada curso de ese autor.  
Con el id se puede identificar el curso y acceder al resto de la información si se desea.

---

## **4. Cache Home**

### **Campos:**

- **id_cache**
- **top_tematica:** Objeto que contiene el nombre de la categoría y un array con los datos básicos de los X cursos más visitados de esa categoría.
- **ultimos_cursos:** Array con los datos básicos de los últimos cursos publicados.

### **Consideraciones:**

Aquí se aplicará el patrón `computed pattern` de tal forma que podamos precalcular y almacenar en cache tanto los últimos cursos basándose en la fecha como los cursos más visitados basándose en el número de visitas.
