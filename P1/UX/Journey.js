/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */
/*          [DIU] UX Toolkit               */
/*          ver 1.0, 2019                  */
/*******************************************/

/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {

		$scope.JourneyIndex = 0;

        $scope.Journeys = [
			{

                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/

				Id: 0,
				Name: "Manuel Ortiz",
                Photo: "hombre.jpg",

                /*** PASO #1: INSPIRACION ***/
                goal1: "quiere preparar un viaje solo, ya que ha visto que a mucha gente le ha ido bien",
                touch1: "agenda",
                feel1: "4",
                con1: "ver cuando terminaria los examenes para poder organizarlo todo",
                ima1: "cartoon-planning.png",

                /*** PASO #2: DECISION ***/
                goal2: "Busca en internet ofertas a partir del final de curso, la mejor oferta sera la elegida",
                touch2: "ordenador",
                feel2: "2",
                con2: "hay demasiada información y no sabe a donde ir, todas las opciones le gustan",
                ima2: "cartoon-PCangry.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Decide buscar en internet información sobre los diferentes sitios, para decidir mejor",
                touch3: "Ordenador",
                feel3: "3",
                con3: "No sabe que sitios tienen más ofertas para conocer gente y mejores reseñas.",
                ima3: "cartoon-phone.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Buscando inspiración en internet, un influencer le recomienda esta aplicación a sus seguidores.",
                touch4: "Movil - Instagram",
                feel4: "3",
                con4: "Necesita registrarse en la aplicación para acceder a la información",
                ima4: "cartoon-PCtyping.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Busca en la aplicación los destinos que más le interesen, con criterio de buen precio y fiesta",
                touch5: "Aplicación de Móvil - Passporter",
                feel5: "4",
                con5: "Los precios son parecidos entre varias ciudades.",
                ima5: "cartoon-phoning.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "En igualdad de precios entre varios lugares, decide su destino en base a las fotos que ve y más le gustan para visitar",
                touch6: "ordenador",
                feel6: "3",
                con6: "Decide viajar a Budapest pero no puede reservar en la misma aplicación y tiene que buscar transporte en otro lugar",
                ima6: "cartoon-resting.png",

			},
			{
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/

				Id: 1,
				Name: "Josefa Amparo",
                Photo: "mujer.png",

				 /*** PASO #1: INSPIRACION ***/
                goal1: "Quiere preparar un viaje con su marido, para cumplir su sueño",
                touch1: "Agenda",
                feel1: "5",
                con1: "Quiere ir a Italia o Francia, y conocer su arte y monumentos",
                ima1: "cartoon-going.png",

                /*** PASO #2: DECISION ***/
                goal2: "Llama a una agencia para ver si hay algunas opciones",
                touch2: "Teléfono",
                feel2: "4",
                con2: "Le comentan varios lugares que le pueden interesar",
                ima2: "cartoon-phoning.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Pregunta a sus hijos para elegir destino",
                touch3: "Internet",
                feel3: "3",
                con3: "Piensa que internet es complicado, pero que siempre es momento de aprender",
                ima3: "cartoon-teamthinking.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Sus hijos le enseñan una aplicación que ellos mismos utilizan cuando salen de viaje",
                touch4: "Móvil (webapp)",
                feel4: "2",
                con4: "Termina utilizando el móvil de uno de sus hijos porque la aplicación necesita registro",
                ima4: "cartoon-phone-sitting.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Observa perfiles de personas que fueron a lugares donde ella quiere viajar y decide dentro de las que le dio la agencia cual escoger y que sitios querrá visitar ",
                touch5: "Móvil (webapp)",
                feel5: "5",
                con5: "Mira todos los lugares que le gustan y disfruta mucho eligiendo.",
                ima5: "cartoon-phone-sitting.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Consigue elegir un sitio, llama a la agencia",
                touch6: "Teléfono",
                feel6: "4",
                con6: "En la agencia le dan las opciones de las excursiones a hacer, no todas son lo que queria pero estan bien.",
                ima6: "cartoon-PChard.png",



			}
		];

		$scope.model = $scope.Journeys[0];

	}])
