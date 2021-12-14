import './Product.page.css';

export default function Product(props) {
  let { title, image, price, category } = props.history.location.state;

  return (
    <div className="Product">
      <div className="Product-image">
        <img src={image} alt={title}/>
      </div>
      <div className="Product-container">
        <div className="Product-title">{title}</div>
        <div className="Product-price">{price} €</div>
        <div className="Product-category">Categoría: {category}</div>
      </div>
    </div>
  );
}