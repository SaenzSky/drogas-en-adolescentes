const hamburger1 = document.querySelector('.hamburger')
const imagenes = document.querySelectorAll('.img-galeria')
/*agregar-imagen esta dentro de image-light*/
const imagenesLight = document.querySelector('.agregar-imagen')
/*Es el contenedor que almacena agregarimagen */
const contenedorLight = document.querySelector('.image-light');

/*Lo que hace todo esto es que cuando le de click en la imagen cambie en el html el src de img1 a img2 o 3 dependiendo de la imagen que se seleccione con el click y asi poderla presentar en grande a la pantalla con el const aparecerImagen donde obtiene el src y saca las clases show y showImage */
imagenes.forEach((imagen) => {
    imagen.addEventListener('click', () => {
      aparecerImagen(imagen.getAttribute('src'));
    });
});

/*arreglo que contenga los textos correspondientes y modificar la función aparecerImagen para que también muestre el texto relacionado a la imagen seleccionada
const textos = [
    "El consumo de marihuana en adolescentes puede tener efectos negativos en su desarrollo cognitivo y emocional. Puede afectar la memoria, la concentración y el rendimiento académico. También aumenta el riesgo de problemas de salud mental, como la ansiedad y la depresión. Además, puede interferir con el desarrollo normal del cerebro en esta etapa crucial. Es importante fomentar una educación preventiva y brindar información precisa sobre los riesgos asociados.",

    "El consumo de cigarrillos en adolescentes puede tener graves consecuencias para la salud. El tabaco contiene sustancias adictivas y tóxicas que pueden dañar los pulmones y el sistema cardiovascular. Además, aumenta el riesgo de desarrollar enfermedades respiratorias, cardiovasculares y diversos tipos de cáncer. También puede afectar el desarrollo cerebral y tener impactos negativos en el rendimiento académico y la salud mental. Es fundamental educar sobre los riesgos del tabaco y promover estilos de vida saludables.",
    
    "El consumo de alcohol en adolescentes puede tener graves consecuencias para su salud física y mental. Puede afectar el desarrollo cerebral, causando daños duraderos en la memoria y el aprendizaje. Además, aumenta el riesgo de adicción, comportamientos arriesgados, accidentes de tráfico y problemas académicos. El consumo precoz también se relaciona con trastornos de salud mental y sociales. Es crucial promover la educación sobre los riesgos del alcohol y fomentar decisiones saludables.",

    "El uso de vape o cigarrillos electrónicos en adolescentes puede tener efectos perjudiciales para la salud. La exposición a sustancias químicas presentes en los vapeadores puede dañar los pulmones y el sistema respiratorio. También puede causar irritación de la garganta, tos persistente, dificultad para respirar y aumentar el riesgo de adicción al nicotina. Además, se han reportado casos de lesiones pulmonares graves relacionadas con el vapeo. Es fundamental educar sobre los riesgos y promover hábitos libres de vapeo entre los jóvenes.",

    "El consumo de crack en adolescentes puede tener devastadores efectos en su salud física y mental. Esta droga altamente adictiva puede causar daños cerebrales irreversibles, trastornos del sueño, pérdida de apetito y aumento de la agresividad. También puede provocar problemas cardiovasculares, respiratorios y hepáticos. Además, el crack puede llevar a comportamientos delictivos y desintegración familiar. Es urgente brindar educación sobre los riesgos y ofrecer apoyo a los adolescentes que luchan contra la adicción al crack.",
    
    "El consumo de cocaína en adolescentes puede tener graves consecuencias para su salud física y mental. Esta droga estimulante puede causar daño cerebral, trastornos del sueño, paranoia, ansiedad y depresión. También puede aumentar el riesgo de ataques cardíacos, accidentes cerebrovasculares y convulsiones. La adicción a la cocaína puede llevar a problemas académicos, sociales y legales. Es vital educar sobre los riesgos y ofrecer apoyo a los adolescentes que enfrentan problemas de consumo de cocaína."
  ];
*/  

/*Acceder a contenedorlight ejecutar un addEventListener tipo click como parametro evento, un condicional, si e.target es diferente a imageneslight, en este caso imageneslight es mi clase agregar imagen, si es diferente a eso agregarle a contenedorlight un toggle de una clase show y de esa manera a imagenes light agregarle la clase showImage, el hamburger1 cuando se de click a cada una de las imagenes el menu desaparezca*/
contenedorLight.addEventListener('click', (e) =>{
    if(e.target != imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburger1.style.opacity = '1';
    }
})

/*Obtiene un parametro*/
const aparecerImagen = (imagen) => {
    /*Obtiene su atributo src*/
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    /*Cuando se cierre la imagen aparezca con el opacity 0 */
    hamburger1.style.opacity = '0';
}