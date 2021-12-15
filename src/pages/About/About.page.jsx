import './About.page.css';
import Context from '../../context';

export default function About() {
  
  return (
    <Context.Consumer>
      {context => (
        <div className="container">
          <h1>Todo sobre mi tienda</h1>
        </div>
      )}
    </Context.Consumer>
  );
}