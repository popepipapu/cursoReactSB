import './Product.page.css';
import { useSelector } from 'react-redux';

export default function Product(props) {
  let { title, image, price, category, description } = props.history.location.state;
  const styleChange = useSelector(state => state).styleChange;

  return (
      <div className={["container",styleChange ? 'nightMode' : 'dayMode'].join(' ')}>
        <div className="row dd-flex justify-content-center">
          <div className="col-md-12">
            <div className="card px-3">
              <div className="row">
                <div className="col-md-6">
                  <div className="product-image"> <img src={image} alt={title}/> </div>
                </div>
                <div className="col-md-6">
                  <div className="card px-3 text-white bg-dark">
                    <div className="card-header">Categoría: {category}</div>
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{description}</p>
                      <h5 className="card-title">{price} €</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}