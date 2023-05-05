features pendientes:

//Auth : una opcion seria hacerla con NextAuth. 
Despues quisiera que ademas de permitir el ingreso, el usuario pueda:
- guardar su perfil:
    -mail y pwd de ingreso, tambien acalaracion de mayor de edad o no para filtarle contenido adulto por default
    -nombre
    -avatar
    -preferencias: filtrar siempre contenido adulto, puntajes... algo mas?


//Deberia ofrecer + info aunque no tenga trailer 

//Idiomas? esto mas que elegir entre en/es estaria bueno que fuera universal, simplemente grabando la opcion del usuario y mandandolo por param, lo malo es con los botones que agregue yo, ahi tocaria escribir manualmente las traducciones, o quizas se pueda bajar un diccionario solo de eso?

//se puede hacer que te ofrezca subtitulos e idioma de los trailers?

//Agregar dos o tres fetch mas para mostarra pag2 y 3 de respuestas. Hay que hacer un fetch por página no hay otro modo. Se podrian hacer de entrada los tres, y simplemente cambiar el estado de movies al tocar el boton de pag2.  -- ESTO HICE QUE TRAIGA SOLO PAG2, HAY UN BOTON NEXT/BACK, EL MOTIVO ES QUE CASI NINGUNA TIENE PAG3. QUIZAS HABRIA QUE AGREGAR ALGO QUE MUESTRE CUANDO EL FETCH NO TRAE RESULTADOS, POR EJEMPLO QUERY=CUCURUCHO, QUEDA TODO EN BLANCO. ESPECIALMENTE ES FEO EN EL VISOR PORQUE TIENE TAMAÑO GRANDE Y SE VE EL HUECO. TAMBIEN QUEDA A PENSAR MEJORAR EL FETCH PARA QUE SE LE PEUDA PASAR MAS PAGINACIONES, CON UNA VARIABLE PAGE QUE VA EN PARAMS.

//en mas info, quisiera agregar mas datos de Créditos de la peli: director, actores, ect. En el bloque de pelis podria mostrar tambien pais de origen.

//Que trae por default al cargar? Las mas recientes? o las mas puntuadas? TRAE DISCOVER/MOVIES, HABRIA QUE VER QUE ES ESO EN LA DOC DE LA API

// Puntaje. Incluir puntaje de database y tambien permitir al usuario puntuar

//Agregar typescript