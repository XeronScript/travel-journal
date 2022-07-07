import './App.css'
import NavBar from './components/NavBar'
import Card from './components/Card'
import data from './data'

function App() {
    let content = data.map(item => <Card {...item} />)

    return (
        <div className="container">
            <NavBar/>
            {content}
        </div>
    );
}

export default App;
