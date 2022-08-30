import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";


const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh', 
};

/*const style = {
  color: '#000',
}*/

const textStr = `Поздравляю с днем рожденья!
Пусть будет жизнь полна веселья,
Не будет грусти и хлопот,
А только счастье круглый год!

Желаю творческих успехов,
Прекрасных дней, улыбок, смеха.
Любви, душевного тепла,
Как сказка, чтобы жизнь была!`;

const imgSrc = './img/card-bg.jpg';

const App = () => {
  return (
    <div style={wrapper}>      
      <Header />
      <Card text={textStr} img_src={imgSrc}/>
      <Footer />
    </div>
  );
}

export default App;
