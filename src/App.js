import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Components/Card/Card.js'

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-3">
            <Card image='http://placehold.it/350x200'>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card>
              <h5 className="card-title">Special title theatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to addition content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
