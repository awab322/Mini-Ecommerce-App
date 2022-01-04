import React , {useState , useEffect} from 'react';
import { useParams } from "react-router";
import { useSelector , useDispatch } from "react-redux";
import { addItem } from "../redux/action/index";

const DescriptionProduct = () => {

    const dispatch = useDispatch()

    const addProduct = (product) =>
    {
        dispatch(addItem(product))
    }



    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);


    const Loading = () =>
    {
        return(
            <>
            <h1 className="text-center display-6">Description Loading ...</h1>
            </>
        )
    }
    const ShowData = () =>
    {
        return(
            <>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-5 text-center">
                <img src={product.image} alt={product.title} className="" height="200" />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-5 text-center">
                    <h1 className="display-6">{product.title}</h1>
                    <h3 >
                        $ {product.price}
                    </h3>
                    <p >{product.description}</p>
                    <button className="btn btn-outline-success " onClick={()=>addProduct(product)}>
                        Add to Cart
                    </button>
            </div>
            </>
        )
    }

    return (
        <>
        <div className="container">
        <div className="row">
        {loading?<Loading/> : <ShowData/>}
        </div>
        </div>
            
        </>
    );
}

export default DescriptionProduct;
