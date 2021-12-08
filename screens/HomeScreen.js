import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { AuthContext } from "../navigation/AuthProvider";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Container } from "../styles/FeedStyles";

import PostCard from "../components/PostCard";

const Posts = [
  {
    id: "0",
    userName: "William Monroy",
    userImg: require("../assets/william.jpg"),
    postTime: "1 min ago",
    post: "Hola pronto tendré un internship en Microsoft y tengo algunas dudas, alguien que tenga experiencia podría comentar algun consejo?",
    postImg: 'none',
    liked: true,
    likes: "18",
    comments: "5",
  },
  {
    id: "1",
    userName: "Pablo Sepulveda",
    userImg: require("../assets/pablo.jpeg"),
    postTime: "3 min ago",
    post: "En unos meses me voy de intercambio, tienen algunos tips para hacer amigos?",
    postImg: 'none',
    liked: true,
    likes: "140",
    comments: "5",
  },
  {
    id: "2",
    userName: "ITESM",
    userImg: require("../assets/tec.jpg"),
    postTime: "10 min ago",
    post: "ATENCION: El 15 de Diciembre haremos un taller para los que consiguieron internship, estén atentos y no se lo pierdan!",
    postImg: require("../assets/posts/coneeq/Picture1.jpg"),
    liked: true,
    likes: "140",
    comments: "5",
  },
  {
    id: "3",
    userName: "CONEEQ",
    userImg: require("../assets/hand-shake.png"),
    postTime: "1 min ago",
    post: "2. Propuesta de valor ¿Qué tan convincente es tu propuesta de valor? ¿Por qué tus clientes consumen tu producto? ¿Por qué compran? La propuesta de valor es el núcleo de la razón de existir de una empresa, y es tu manera de satisfacer las necesidades del cliente. ¿Cómo se distingue tu organización de la competencia? Céntrate en la cantidad, el precio, el servicio, la rapidez y las condiciones de entrega, por un lado; y por el otro, en la calidad, incluido el diseño, el estado de la marca y la experiencia y satisfacción del cliente. ",
    postImg: require("../assets/posts/coneeq/Picture1.jpg"),
    liked: true,
    likes: "140",
    comments: "5",
  },
  {
    id: "4",
    userName: "CONEEQ",
    userImg: require("../assets/hand-shake.png"),
    postTime: "1 min ago",
    post: "3. Canales ¿Cómo se promueven, venden y entregan tus productos o servicios? ¿Por qué? ¿Están funcionando? Ocúpate de los canales de comunicación, distribución y ventas. No se trata solo del contacto con el cliente y la forma en que tu organización se comunica con tus clientes. La ubicación de compra, la entrega del producto y los servicios provistos son elementos decisivos. Los canales para los clientes tienen 6 etapas diferentes: conocimiento del producto, compra, entrega, evaluación, satisfacción y posventa.  Es recomendable que combines canales físicos y digitales para hacer un buen uso de ellos y llegar a tus clientes ideales. ",
    postImg: require("../assets/posts/coneeq/Picture1.jpg"),
    liked: true,
    likes: "140",
    comments: "5",
  },
  {
    id: "5",
    userName: "CONEEQ",
    userImg: require("../assets/hand-shake.png"),
    postTime: "1 min ago",
    post: "4. Relaciones con clientes  ¿Cómo interactúas con el cliente a través de su proceso? Es esencial interactuar con tus clientes. Cuanto más amplia sea tu base de clientes, más importante será que los dividas en diferentes grupos objetivo. Cada grupo de clientes tiene necesidades específicas. Al anticipar las necesidades del cliente, tú sabrás de qué manera y por qué medio te comunicarás con ellos. Un buen servicio garantizará relaciones buenas y estables con tus clientes en un futuro. ",
    postImg: require("../assets/posts/coneeq/Picture1.jpg"),
    liked: true,
    likes: "140",
    comments: "5",
  },
  {
    id: "6",
    userName: "CONEEQ",
    userImg: require("../assets/hand-shake.png"),
    postTime: "1 min ago",
    post: "5. Fuente de ingresos ¿Cómo genera ingresos tu propuesta de valor? Estructurar los costes y los flujos de ingresos te proporcionará una visión clara de cómo tu organización obtiene ingresos. Por ejemplo, ¿cuántos clientes necesita tu organización anualmente para generar ganancias? ¿Cuántos ingresos necesitas para alcanzar el punto de equilibrio? ¿Cuál es el coste de tu producto? Aquí se incluyen los ingresos por la venta de tus productos o servicios, las tarifas de suscripción, ingresos por arrendamiento, licencias, patrocinios, costes de publicidad y demás. Define cuántos ingresos y egresos representan para tu empresa cada uno de estos canales. ",
    postImg: require("../assets/posts/coneeq/Picture1.jpg"),
    liked: true,
    likes: "140",
    comments: "5",
  },
  {
    id: "7",
    userName: "CONEEQ",
    userImg: require("../assets/hand-shake.png"),
    postTime: "1 min ago",
    post: "6. Actividades clave ¿Qué estrategias únicas tiene tu negocio para entregar su propuesta al cliente? Al tener un buen conocimiento de las actividades centrales de tu empresa, obtendrás una comprensión más completa de la propuesta de valor de tu organización. No se trata solo de producir, sino de enfocarte en la resolución de problemas, en las redes y en la calidad del producto o servicio. Cuando una organización tiene claro cuál es el valor que ofrece al cliente, puede desarrollar una mejor relación con los clientes existentes, lo cual será útil en el sondeo de nuevos clientes y, por tanto, en sobresalir entre la competencia. ",
    postImg: require("../assets/posts/coneeq/Picture1.jpg"),
    liked: true,
    likes: "140",
    comments: "5",
  },
  {
    id: "8",
    userName: "CONEEQ",
    userImg: require("../assets/hand-shake.png"),
    postTime: "1 min ago",
    post: "7. Recursos clave ¿Qué activos estratégicos únicos tiene mi negocio para competir? Los recursos clave son medios que una empresa necesita llevar a cabo. Se pueden clasificar como recursos físicos, intelectuales, financieros o humanos. Los recursos físicos pueden incluir activos, tales como los equipos comerciales. Los recursos intelectuales abarcan, entre otras cosas, el conocimiento, las marcas, las patentes y las certificaciones. Los recursos financieros están relacionados con el flujo de fondos, las fuentes de ingresos y los recursos humanos. ",
    postImg: require("../assets/posts/coneeq/Picture1.jpg"),
    liked: true,
    likes: "140",
    comments: "5",
  },
  {
    id: "9",
    userName: "CONEEQ",
    userImg: require("../assets/hand-shake.png"),
    postTime: "1 min ago",
    post: "8. Asociaciones clave ¿Qué actividades puede dejar de realizar la compañía para enfocarse en sus acciones clave? Es importante crear alianzas con socios, tanto para las organizaciones que inician como para las organizaciones existentes.  Obtendrás información esencial al saber de antemano qué socios pueden constituir una relación valiosa. Ellos pueden aportar recursos que harán más eficiente tu modelo de negocio. ",
    postImg: require("../assets/posts/coneeq/Picture1.jpg"),
    liked: true,
    likes: "140",
    comments: "5",
  },
  {
    id: "10",
    userName: "CONEEQ",
    userImg: require("../assets/hand-shake.png"),
    postTime: "1 min ago",
    post: "9. Estructura de costes ¿Cuáles son los principales generadores de costes de la empresa? ¿Cómo se vinculan a los ingresos? Al obtener una idea de la estructura de costes, sabrás cuál debe ser el volumen mínimo de tus ventas para obtener ganancias. La estructura de costes considera economías de escala, costes constantes y variables, así como las ganancias.  Principalmente al comienzo, cuando es normal que debas hacer más inversiones en comparación con los ingresos que llegan, deberás ajustar los costes. Ya conoces y manejas el modelo de negocio Canvas siempre tenlo en cuenta va a ser tu acompañante en todo momento porque de este método vas a llevar a tu empresa a lo más alto o vas a solo dejar la idea y tiempo en ello, ahora si vamos a trabajar esa idea Después de que tengas tu idea ya hiciste el estudio de que tan viable es y ya te decidiste que vas a realizar estos son los siguientes pasos que vas a realizar para que empieces a trabajar en tu negocio Esto lo llamamos los 9 pasos para constituir tu empresa son sencillos pero muy importantes 1.	Verifica la disponibilidad del nombre de la empresa ante la Cámara de Comercio 2.	Consulta la clasificación por actividad económica 3.	Elige el tipo de sociedad que vas a construir 4.	Realiza los tramites entre la Cámara de Comercio y la Dian 5.	Verifica el estado de trámite ante las entidades 6.	Realiza los trámites ante la notaria publica de la constitución de la sociedad 7.	Ten en cuenta que todo tipo de sociedad comercial con menos de 10 trabajadores o hasta 500 SMLV en activos fijos al momento de la constitución no necesita escritura pública (esto depende de cada país) 8.	Abre una cuenta bancaria y deposita el capital de la empresa 9.	Recuerda hacer la inscripción en los libros de comercio Los nueve pasos que debes de seguir esto solo puede cambiar dependiendo el país y la zona de tu país, pero siempre se debe de realizar. ",
    postImg: require("../assets/posts/coneeq/Picture1.jpg"),
    liked: true,
    likes: "140",
    comments: "5",
  },
  {
    id: "11",
    userName: "CONEEQ",
    userImg: require("../assets/hand-shake.png"),
    postTime: "1 min ago",
    post: "¡Enhorabuena¡  Ya completamos el paso mas importante quieres continuar con nosotros aprenderás de como debes compartir tu empresa como hacerte conocer de otras empresas y obtener muchos más clientes. ",
    postImg: require("../assets/posts/coneeq/Picture1.jpg"),
    liked: true,
    likes: "140",
    comments: "5",
  },
  {
    id: '12',
    userName: 'Jenny Doe',
    userImg: require('../assets/users/user-3.jpg'),
    postTime: '4 mins ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
      postImg: require("../assets/posts/coneeq/Picture1.jpg"),
      liked: true,
    likes: '14',
    comments: '5',
  },
  {
    id: '13',
    userName: 'John Doe',
    userImg: require('../assets/users/user-1.jpg'),
    postTime: '2 hours ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '8',
    comments: '0',
  },
  {
    id: '14',
    userName: 'Ken William',
    userImg: require('../assets/users/user-4.jpg'),
    postTime: '1 hours ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-2.jpg'),
    liked: true,
    likes: '1',
    comments: '0',
  },
  {
    id: '15',
    userName: 'Selina Paul',
    userImg: require('../assets/users/user-6.jpg'),
    postTime: '1 day ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-4.jpg'),
    liked: true,
    likes: '22',
    comments: '4',
  },
  {
    id: '16',
    userName: 'Christy Alex',
    userImg: require('../assets/users/user-7.jpg'),
    postTime: '2 days ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '0',
    comments: '0',
  },
];

const HomeScreen = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <FlatList
        data={Posts}
        renderItem={({ item }) => <PostCard item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default HomeScreen;
