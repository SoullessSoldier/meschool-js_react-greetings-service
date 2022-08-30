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

const textStr = `Поздравляю с днем рожденья!<br/>
Пусть будет жизнь полна веселья,<br/>
Не будет грусти и хлопот,<br/>
А только счастье круглый год!<br/>
<br/>
Желаю творческих успехов,<br/>
Прекрасных дней, улыбок, смеха.<br/>
Любви, душевного тепла,<br/>
Как сказка, чтобы жизнь была!`;

const App = () => {
  return (
    <div style={wrapper}>      
      <Header />
      <Card text={textStr}/>
      <Footer />
    </div>
  );
}

export default App;
