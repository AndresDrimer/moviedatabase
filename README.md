features pendientes:
..
TO DO:..

//Auth : una opcion seria hacerla con NextAuth. (o Firebase)
Despues quisiera que ademas de permitir el ingreso, el usuario pueda:
- guardar su perfil:
    -mail y pwd de ingreso, 
    -edad para filtarle o no contenido adulto por default
    -nombre
    -avatar
    -preferencias: filtrar siempre contenido adulto o no, poner puntajes propios, elegir sus favoritos y almacenarlos, y el idioma seleccionado. (¿la api te ofrece pasarte pelis parecidas a su coleccion de favoritas o no?)

// Al cambiar el idioma en el medio del uso, deberia llamarse de nuevo al fetch de todas las pelis, para que las presente ya con sus titulos traducidos al nuevo idioma.

// Cuando se eligen pelis por género, a veces queda la 1 igual, a veces no, eso quizas podria solucionarse con sort, aunque recordar que antes trajo problemas.... quizas ni sea un problema despues de todo

// La resolucion del responsive de la hambuerguesa esta mal hecha, deberia centrase de manera mas automatica, mejorar. La cajita negra que sale al clickearla necesita su adaptatividad tambien

// estaria bueno un buscador por director o por interpete que vaya filtrando dentro de los posibles, de manera que si pones tom h te complete a tom hanks-....

//Nuevo Logo CATA ? Deberia decir Abeto´s TRAILER database

//Agregar typescript: esto es nuevo asi que vamos a pensarlo bien antes de tocar el código.
CÓMO SERIA LA ESTRUCTURA? DENTRO DE "/types/tmdbProjectTypes.d.ts" ARMAR TODOS LOS TYPES DE RESPUESTAS DE LA API. Creo que mejor cada type deberia ir arriba de su fetch, es mas simple de buscar ahi para referencia
AHORA BIEN: COMO ES CUANDO ESO ENTRA, EN EL MAIN? cuando se pone que es promise, no hace falta aclarar que podria llegar una res.ok o no, ya viene con el type.

type User = {
  id: number;
  name: string;
  email: string;
};
LA FUNCION DE FETCH SIMPLEMENTE ES : Promise<NombreDeTuType - "User" en este caso> , cada variante llamada como parámetro igual lleva su propio tipo: id: number.
<NombreDeTuType> tambien va indicado asi despues de axios.get<NombreDeTuType>(...)

Para terminar, cuando la promesa vuelve se le pone .then(data => data as User[]); User[] es un type definido antes que tiene un obejto dentro. Esa manera de escribirlo implica que son un array de esos objetos, por ejemplo todas las colecciones de peliculas que fuiste eligiendo. Eso deberia por ejemplo usarse para los favoritos, porque ahi hay que perdurar un array de objetos. Pero en el fetch inicial por ejemplo no, alli simplemente es un solo objeto, el actual, no hayq ue ir para ataras nunca.

ejemplo:
async function fetchUserById(id: number): Promise<User> {
  const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/\${id}`);
  return response.data;
}

async function main() {
  const user = await fetchUserById(1);
  console.log(user);
}
function getUsers(): Promise<User[]> {
  return fetch('/api/users')
    .then(response => response.json())
    .then(data => data as User[]);
}

como funciona con las declaraciones de useState??
ejemplo no guarda:
interface Student {
    id: number;
    name: string;
}
const [student, setStudent] = useState<Student>({id:0,name:""});

ejemplo sí guarda varios employee en employess[]:
interface Employee {
  name: string;
  salary: number;
}
const [employees, setEmployees] = useState<Employee[]>([]);

//Agregar Context o Redux?? Creo que vamos con Context, y se podria probar primero pasarle simplemente alguna prop, como darkMode o language. Despues de a poco quizás todo el resto....


//----------------------------------------


DONE:

//Deberia ofrecer "+ info" aunque no tenga trailer - HECHO

//Hacer LOGO responsive -HECHO

//Idiomas? AHORA ESTA EN EN/ES - NO TE OFRECE LA API UNA LISTA DE SUS IDIOMAS DISPONIBLES, POR ESO NO PUEDO ARMARLO PARA CUALQUIER IDIOMA. POR OTRO LADO, SERIA DIFICIL TRADUCIR MIS BOTONES A TODOS LOS IDIOMAS, PERO PODRIA BUSCARSE ALGUN DICCIONARIO POR PALABRA... POR AHORA QUEDARIA SOLO EN DOS IDIOMAS. QUIZAS PODRIA HABER UN TOGGLER EN LA UI?

//se puede hacer que te ofrezca subtitulos e idioma de los trailers? AL CAMBIAR EL PARAM LENGUAGE EN EL FETCH, TE TRAE O BIEN LA VERSION EN IDIOMA EPAÑOL O SINO CON SUBTITULO EN ESPAÑOL, ESO LO HACE POR DEFAULT. NO SÉ SI SEPUEDE PEDIRLE QUE TE DEJE ELEGIR SUBTITULO SI O SUBTITULO NO. O ELEGIR IDIOMA/SUBTITULO EN OTRA COMBINACION

//mejorar diseño de no-poster para cuando no hay imagen - HECHO

//Agregar dos o tres fetch mas para mostarra pag2 y 3 de respuestas. Hay que hacer un fetch por página no hay otro modo. Se podrian hacer de entrada los tres, y simplemente cambiar el estado de movies al tocar el boton de pag2.  -- ESTO HICE QUE TRAIGA SOLO PAG2, HAY UN BOTON NEXT/BACK, EL MOTIVO ES QUE CASI NINGUNA TIENE PAG3. QUIZAS HABRIA QUE AGREGAR ALGO QUE MUESTRE CUANDO EL FETCH NO TRAE RESULTADOS, POR EJEMPLO QUERY=CUCURUCHO, QUEDA TODO EN BLANCO. ESPECIALMENTE ES FEO EN EL VISOR PORQUE TIENE TAMAÑO GRANDE Y SE VE EL HUECO. TAMBIEN QUEDA A PENSAR MEJORAR EL FETCH PARA QUE SE LE PEUDA PASAR MAS PAGINACIONES, CON UNA VARIABLE PAGE QUE VA EN PARAMS.

//en mas info, quisiera agregar mas datos de Créditos de la peli: director, actores, ect. - HECHO 

// Puntaje. Incluir puntaje de database - HECHO

// Tiene que buscar por director y por actor/actriz - HECHO. Un detalle: la busqueda por director tiene algo raro: incluye a quienes estan en el area direccion(director, audante de direccion, etc...), no sólo al director