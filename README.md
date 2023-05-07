features pendientes:

//Auth : una opcion seria hacerla con NextAuth. 
Despues quisiera que ademas de permitir el ingreso, el usuario pueda:
- guardar su perfil:
    -mail y pwd de ingreso, tambien acalaracion de mayor de edad o no para filtarle contenido adulto por default
    -nombre
    -avatar
    -preferencias: filtrar siempre contenido adulto, puntajes... algo mas?


//Deberia ofrecer "+ info" aunque no tenga trailer 

//Hacer LOGO responsive

//Idiomas? AHORA ESTA EN EN/ES - NO TE OFRECE LA API UNA LISTA DE SUS IDIOMAS DISPONIBLES, POR ESO NO PUEDO ARMARLO PARA CUALQUIER IDIOMA. POR OTRO LADO, SERIA DIFICIL TRADUCIR MIS BOTONES A TODOS LOS IDIOMAS, PERO PODRIA BUSCARSE ALGUN DICCIONARIO POR PALABRA... POR AHORA QUEDARIA SOLO EN DOS IDIOMAS. QUIZAS PODRIA HABER UN TOGGLER EN LA UI?

//se puede hacer que te ofrezca subtitulos e idioma de los trailers? AL CAMBIAR EL PARAM LENGUAGE EN EL FETCH, TE TRAE O BIEN LA VERSION EN IDIOMA EPAÑOL O SINO CON SUBTITULO EN ESPAÑOL, ESO LO HACE POR DEFAULT. NO SÉ SI SEPUEDE PEDIRLE QUE TE DEJE ELEGIR SUBTITULO SI O SUBTITULO NO. O ELEGIR IDIOMA/SUBTITULO EN OTRA COMBINACION

//Agregar dos o tres fetch mas para mostarra pag2 y 3 de respuestas. Hay que hacer un fetch por página no hay otro modo. Se podrian hacer de entrada los tres, y simplemente cambiar el estado de movies al tocar el boton de pag2.  -- ESTO HICE QUE TRAIGA SOLO PAG2, HAY UN BOTON NEXT/BACK, EL MOTIVO ES QUE CASI NINGUNA TIENE PAG3. QUIZAS HABRIA QUE AGREGAR ALGO QUE MUESTRE CUANDO EL FETCH NO TRAE RESULTADOS, POR EJEMPLO QUERY=CUCURUCHO, QUEDA TODO EN BLANCO. ESPECIALMENTE ES FEO EN EL VISOR PORQUE TIENE TAMAÑO GRANDE Y SE VE EL HUECO. TAMBIEN QUEDA A PENSAR MEJORAR EL FETCH PARA QUE SE LE PEUDA PASAR MAS PAGINACIONES, CON UNA VARIABLE PAGE QUE VA EN PARAMS.

//en mas info, quisiera agregar mas datos de Créditos de la peli: director, actores, ect. En el bloque de pelis podria mostrar tambien pais de origen.

//Que trae por default al cargar? Las mas recientes? o las mas puntuadas? TRAE DISCOVER/MOVIES, HABRIA QUE VER QUE ES ESO EN LA DOC DE LA API

// Puntaje. Incluir puntaje de database y tambien permitir al usuario puntuar

//Agregar typescript

// quizas podria buscar por año, o por director, o por actor principal.....