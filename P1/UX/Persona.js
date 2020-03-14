/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */
/*          [DIU] UX Toolkit               */
/*          ver 1.0, 2019                  */
/*******************************************/

/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {

		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{

                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 0,
				Name: "Manuel Ortiz",
				Photo: "man.png",
				Quote: "Soy el único protagonista de mi vida",
				Age: 23,
				Occupation: "Estudiante",
				Family: "Soltero",
				Location: "Granada",
				Character: "Ser más independiente.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				],
				Goals: ["Dirigir su propia clinica deportiva.", "Tratar deportistas de alto nivel"],
				Frustrations: ["Siente que esta perdiendo el tiempo", "No tener un trabajo que proporcione estabilidad económica."],
				Bio: "Es un estudiante de Fisioterapia proveniente de Jimena de la Frontera, Cadiz. Dispuesto a aprender de todo, esta en su último año de carrera. Aquí ha hecho buenos amigos, normalmente se reúnen para salir de fiesta y/o tomarse unas cervezas.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 5 }

				],
        Contextos: "Busca independizarse, un cambio de aires, su motivación es descubrir nuevos lugares y aprender a valerse por si mismo.",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{

                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 1,
				Name: "Josefa Amparo",
				Photo: "woman.png",
				Quote: "Nunca es tarde si la dicha es buena",
				Age: 57,
				Occupation: "Ilustradora Infantil",
				Family: "Casada",
				Location: "Villablino, León.",
				Character: " Cumplir un sueño",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 1 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				],
				Goals: ["Visitar Italia y Francia.", "Pintar."],
				Frustrations: ["No poder compartir lo que le gustaría con su marido.", "No esta comoda con las tecnologías."],
				Bio: "Ama el arte desde joven, y adora su trabajo. Los ultimos años no ha podido crear tanto como queria porque tenia que cuidar de su marido. Sus hijos se han marchado y ahora goza del tiempo libre suficiente para disfrutar de sus metas. ",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 1 }

				],
                Contextos: "Ahora que puede, busca conseguir esa meta que se propuso de joven, que es viajar por toda Francia descubriendo su arte y pasear por Italia absorviendo su historia." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 4 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
