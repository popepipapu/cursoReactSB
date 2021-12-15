import './Store.page.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { loadProducts } from '../../redux/actions/productos';

export const Component = withRouter(({ history, location }) => { })
class Store extends React.Component {
    componentDidMount() {
        this.props.loadProducts();
    };
    render() {
        const { history } = this.props;
        let abrirProducto = (product) => {
            // Nos devuelve un producto con ID entre 1 y 20 (Ambos incluidos).
            history.push({
                pathname: '/product/' + product.id,
                state: {
                    id: product.id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    category: product.category,
                    description:product.description
                }
            })
        }

        if (this.props.loading) {
            return <div className="d-flex justify-content-center mt-100">
                <div className="spinner"></div>
            </div>
        }
        if (this.props.error) {
            return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
        }
        return (

            <div className={["Store",this.props.styleChange ? 'nightMode' : 'dayMode'].join(' ')}>
                <article>
                    <section className="section-products">
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-md-8 col-lg-6">
                                    <div className="header">
                                        <h3>Lista de productos disponibles</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {this.props.data.map(product => (
                                    <div className="col-md-4 col-lg-2 col-xl-2">
                                        <div className={["card px-3 mb-3",this.props.styleChange ? '' : 'text-white bg-dark'].join(' ')}>
                                            <div className="card-img-top" style={{ backgroundImage: `url(${product.image})` }}></div>
                                            <div className="card-body">
                                                <h5 className="card-title" title={product.title}>{product.title}</h5>
                                                <div className="btn btn-primary card-button" onClick={() => abrirProducto(product)} key={product.id}>Ver detalles</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    data: state.productos.data,
    loading: state.productos.loading,
    error: state.productos.error,
    styleChange: state.styleChange
});

const mapDispatchToProps = {
    loadProducts
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Store);