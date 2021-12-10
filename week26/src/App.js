import Hero from './components/Hero';
import './App.css';


let heroes = [
  {
      heroName: 'Бэтмен',
      universe: "DC Comics",
      alterEgo: "Брюс Уэйн",
      activity: "борец с преступностью, филантроп, миллиардер",
      friends: "Робин, Бэтгерл",
      superPower: "интеллект, обширные познания, знания боевых искусств, ловкость",
      src: "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg",
      
  },

  {
      heroName: "Супермен",
      universe: "DC Comics",
      alterEgo: "Кларк Кент",
      activity: "борец за справедливость",
      friends: "собака Крипто",
      superPower: "интеллект, обширные познания, знания боевых искусств, ловкость",
      src: "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg",
       
  },

  {
      heroName: "Железный человек",
      universe: "Marvel Comics",
      alterEgo: "Тони Старк",
      activity: "гений, миллиардер, плейбой, филантроп",
      friends: "Мстители",
      superPower: "интеллект, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
      src: "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg",
      
  },

  {
      heroName: "Чудо-женщина",
      universe: "DC Comics",
      alterEgo: "Диана Принс",
      activity: "супергероиня, секретарь-референт",
      friends: "Лига Справедливости, Бэтмен, Супермен",
      superPower: "интеллект, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
      src: "https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg",
      
  },

  {
      heroName: "Черная вдова",
      universe: "Marvel Comics",
      alterEgo: "Наташа Романофф",
      activity: "супергероиня, шпионка",
      friends: "Мстители",
      superPower: "пик человеческого физического потенциала, замедленное старение, знание многих языков",
      src: "https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg",
      
  }
];

function App() {
  return (
    <div className="App">
      <h1 className="heading">Superheroes` Universe</h1>
      {
       heroes.map((hero)=>
       <Hero name={hero.heroName} universe={hero.universe} alterEgo={hero.alterEgo} activity={hero.activity} friends={hero.friends} superPower={hero.superPower} src={hero.src}></Hero>
       )
      }
    </div>
  );
}

export default App;
