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
				Family: "Recién separado",
				Location: "Granada",
				Character: "Le gusta conocer gente. Intenso.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				],
				Goals: ["Dirigir su propia clinica deportiva.", "Tratar deportistas de alto nivel"],
				Frustrations: ["No llegar a final de mes.", "No tener tiempo libre.", "No salir de plata."],
				Bio: "Es un estudiante de Fisioterapia proveniente de Jimena de la Frontera, Cadiz. Dispuesto a aprender de todo, esta en su último año de carrera. Aquí ha hecho buenos amigos y normalmente se reúnen para salir de fiesta. ",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 5 }

				],
                Contextos: "Como acaba de separarse quiere desconectar. Le gustaría darse un capricho y realizar un viaje solo para conocerse más a si mismo.",
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
				Quote: "",
				Age: 57,
				Occupation: "Ilustradora Infantil",
				Family: "Casada",
				Location: "Villablino, León",
				Character: "Descubrir mundo.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 1 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				],
				Goals: ["Conocer nuevas lugares.", "Conocer a sus nietos"],
				Frustrations: ["No tener tiempo para ella misma.", "La discapacidad de su marido."],
				Bio: "Ama el arte desde joven, y adora su trabajo. Los ultimos años no ha podido crear tanto como queria porque tenia que cuidar de su marido. Sus hijos se han marchado, y lleva un tiempo con el sindrome del nido vacio. ",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 1 }

				],
                Contextos:   "Cree que su familia se esta separando y busca que este viaje los una más como familia." ,
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
