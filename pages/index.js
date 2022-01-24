import HomeController from '../Components/Home/HomeController'
import HomeModel from '../Components/Home/HomeModel';

export default function Home({ busLines }) {

  //Checa se a informação da busLines veio, senão coloca um array
  let busLinesFinal = [];
  if (busLines) {
    busLinesFinal = busLines;
  }

  //Carrega o componente HomeController
  return (
    <HomeController preBusLines={busLinesFinal} />
  )
}

//Função chamada na construção da aplicação
export async function getServerSideProps() {
  // Chama a API para buscar a informação dos onibus
  const homeModel = new HomeModel();
  const [status, data] = await homeModel.loadBusLines("80");

  // Retornando { props: { busLines: data } }, o compomente Home
  // receberá `busLines` como props
  return {
    props: {
      busLines: data,
    },
  }

}