# DIU - Practica 3, entregables

## Análisis de MuseMap   
En los siguientes párrafos se pretende realizar un análisis del UX case study de la aplicación MuseMap que se ofrece en el enlace: https://blog.prototypr.io/musemap-street-art-app-ux-case-study-9bec6a99823b.

En primer lugar se contextualiza la aplicación mediante una pequeña introducción, en la que se pone de manifiesto qué problema se propone resolver (en este caso, qué artista ha pintado ese mural que puedes ver en fachadas mientras paseas por Londres por ejemplo).

Seguidamente, se presentan una serie de objetivos básicos para la aplicación así como un primer contacto con las necesidades que asumen tendrán sus potenciales usuarios. Para ello, y antes de comenzar con las entrevistas, realizan una salida a pie de campo para ver cómo esos potenciales usuarios interactúan con el arte urbano para sacar las primeras conclusiones acerca de las características que tendrá la futura aplicación.

A continuación se llega al análisis competitivo con aplicaciones similares a la propuesta para ver cuáles son los puntos fuertes y débiles de las que ya están en el mercado y así ofrecer algo de valor. En este caso y a diferencia de lo realizado en nuestras prácticas, se hace uso de matriz detallando funcionalidades que tienen o deberían tener bastante detallada.

Antes de pasar a las entrevistas con los usuarios hacen uso de un mapa de empatía para tener más claras las ideas de qué es importante y qué no a la hora de encararlas. Esta herramienta no fue utilizada en nuestras prácticas pero cabe remarcar su utilidad de cara a realizar entrevistas con potenciales usuarios reales.

Tras las entrevistas y recabar la suficiente información, pasan a un mapa de afinidad que les ayuda a asociar en grandes grupos algunas ideas fundamentales que deberían estar presentes en la aplicación como funcionalidades básicas. No lo hemos utilizado en la práctica, pero es útil para organizar la información recogida por parte de los usuarios, que normalmente nos van a ofrecer ideas dispares entre sí. De esta forma vamos a ver más claro qué puntos son los principales y cuáles secundarios.

El siguiente paso es crear dos (en este caso) personas ficticias y recrear su experiencia como usuarios de la aplicación. Vemos que los dos perfiles creados en este caso son muy similares, probablemente como consecuencia de los estudios preliminares que tenían por objetivo identificar a futuros usuarios potenciales. Haciendo uso de ambos perfiles se identifican objetivos y problemas encontrados durante el uso de la aplicación. Posteriormente se realiza un user journey y un mapa de experiencia del primero de los usuarios de forma mucho más detallada que el realizado en las prácticas. Se incluye además un análisis pormenorizado de las tareas que lleva a cabo el usuario al igual que se contemplan múltiples escenarios para detectar los problemas que debe resolver la aplicación.

La última parte está enfocada al diseño propiamente dicho. En primer lugar se crea una matriz para priorizar funcionalidades de la aplicación. Se realizan los primeros bocetos lo-fi al igual que hemos hecho en las prácticas, con la diferencia de que aquí se hacen dos iteraciones para afinar el diseño de cara a encontrar posibles problemas en la experiencia de usuario al principio del desarrollo. En la siguiente etapa se crean los bocetos hi-fi, desarrollando los bocetos anteriores y detallándolos en la medida de lo posible. Se vuelven a testar en busca de posibles problemas en la experiencia de usuario y se solventan dichos errores sobre la marcha. Por último, se crea un mapa del sitio aproximado de la aplicación para ver el flujo de acciones que tendría que realizar un usuario para realizar un determinado hito.

Para concluir, se detalla la guía de estilo de la aplicación al igual que hemos hecho en la práctica. Se enfoca principalmente en la elección de una paleta de colores amigable para el usuario, una tipografía y algunos iconos que darán cuerpo a la aplicación. Una vez hechas estas elecciones, se pasan a crear lo que serán los mock-ups finales.

## Propuesta de elementos de diseño o patrones a usar 
Se ha elegido Material Design como patrón base para nuestra aplicación web, nuestra elección viene dada por la claridad de la interfaz y la facilidad de uso de la misma.

Para los bocetos de alta definición, la navegación superior puede ser resuelta con los layout que propone Material Design, implementando un icono en el extremo superior izquierdo y posteriores enlaces directos una vez está el usuario iniciado sesión, o un inline form para iniciar sesión en la plataforma si este aún no lo ha hecho.

La aplicación de las cards de este patrón se acoplan perfectamente a la solución buscada, pues se puede colocar de una manera elegante una imagen del destino del viaje, con una pequeña descripción y un enlace para más detalles.

Las tabs de este patrón son una buena solución para el problema de repartir la información del destino sin sobrecargar de texto una vista principal, pudiendo acceder a más detalles como usuarios inscritos al viaje.

Para los perfiles de usuarios, las imágenes circulares sobre una imagen de cabecera se adaptan perfectamente al boceto propuesto.

Material Design implementa una solución simple y fácil de entender para los usuarios a la hora de seleccionar fechas en un calendario de manera visual, solución que viene perfecta para nuestra página de búsqueda.

Un fat footer como el de nuestro boceto original puede ser implementado correctamente con los estilos web de Material Design, lugar donde se podrán acceder a diferentes secciones, enlaces legales o de contacto y cambiar el idioma entre varias opciones.

En el apartado de la tipografía hemos escogido la fuente Baloo Tamma2 para los títulos y cabeceras, mientras que Open Sans Open Sans para el resto del texto a mostrar. De manera suplementaria, para iconos, se implementarán los propios iconos diseñados por Material Design pues son los que mejor complementan con el resto de guías de diseño de la aplicación web.

[Imagen de la tipografía]

Y por ultimo, a continuación mostraremos los colores elegidos para nuestra aplicación, hemos buscado colores complementarios, para poder destacar claramente el mensaje a nuestro público, para ello utilizamos la tecnica calido-frio, y así dejar más claro las cosas importantes. Ademas, hemos escogido estos colores porque son una muestra de energia, confianza y serenidad, para que nuestros usuarios esten comodos usandola y se fien de la misma. 

Tambien nos ha ayudado a elegir los colores la pagina propia de Material Design, pues tiene un editor propio con un apartado de accesibilidad, que nos muestra la calidad de visual de nuestros colores para las personas con discapacidad. Esta es otra de las razones por la cual nuestra eleccion de colores son los complementarios, para que quede claro para aquellas personas con problemas de visión.

[Imagen de los colores]

## Historia en Video del UX Case Study

[Completar con video]

## Documentación. Valoración del equipo sobre la realización de esta práctica o los problemas surgidos
Ha sido de gran utilidad analizar los pasos seguidos por otros desarrolladores para el diseño de una aplicación, tal y como estamos haciendo nosotros. Se explica de una manera muy clara, con un lenguaje sencillo y con imágenes que ayudan mucho a plasmar las ideas que han ido desarrollando a lo largo de las etapas del diseño. Gracias a este caso y por analogía, nos ha servido para comprender mejor qué estamos haciendo y porqué.

La parte de buscar patrones y propuestas de elementos de diseño ha sido una parte muy interesante e igualmente difícil, aunque nos ha hecho aprender lo importante que es la sencillez y la accesibilidad de una web o aplicación. Además, hemos visto la infinidad de opciones que hay y todos los fallos que nos pueden ocurrir, nos ha hecho coger perspectiva de lo que es una buena base de front end y la necesidad de adaptarla a los visitantes.

De cara a la organización del repositorio, hemos de decir que ahora está organizado de una forma que permite ver de manera global los pasos que se han ido siguiendo y nos parece acertado.


