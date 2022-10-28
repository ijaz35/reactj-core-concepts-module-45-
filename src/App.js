import logo from './logo.svg';
import './App.css';
const singers = [{ name: 'Dr. Mahfuz Khan', age: 42 },
{ name: 'Eva Rahman', age: 22 },
{ name: 'Agun', age: 45 },
{ name: 'Shuvro de', age: 22 }

]

function App() {
  const heroes = ['Sakib Khan', 'Bappa Raj', 'Kuber', 'Josim', 'Rajjak', 'Anwar', 'Elias Kanchan'];
  return (
    <div className="App">
      <h2>Players</h2>
      {
        heroes.map(hero => <Person name={hero}></Person>)
      }
      <h2>Singers</h2>
      {
        singers.map(singer => <Singer name={singer.name} age={singer.age}></Singer>)
      }
      {/* <Person name={heros[0]} nayika="Opu bishwas"></Person>
      <Person name={heros[1]} nayika="Moushumi"></Person>
      <Person name={heros[2]} nayika="Kopila"></Person> */}
      <h2>My new friends</h2>
      <Friend name="Shuvo Sheikh" phone="01722445566"></Friend>
      <Friend name="Imran Khan" phone="01711223344"></Friend>
      <Friend name="Imtiaz Hasan" phone="01722334455"></Friend>
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <h3>{props.nayika}</h3>
    </div>
  );
}
function Friend(props) {
  return (
    <div className="friend">
      <h2>Friend Name: {props.name}</h2>
      <p>Phone Number: {props.phone}</p>
    </div>
  );
}
function Singer(props) {
  console.log(props);
  return (
    <div className="singer">
      <h1>{props.name}</h1>
      <h4>{props.age}</h4>
    </div>
  );
}

export default App;
