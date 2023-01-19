import PersonCard from "./components/PersonCard"


const App = () => {
  return (
    <div>
      <PersonCard firstName="Jimmy" lastName="O'Donald" age={25} hairColor="Brown" />
      <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
      <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Black" />
      <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
    </div>
  )
}

export default App;