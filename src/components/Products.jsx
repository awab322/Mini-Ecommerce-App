import "./myCss.css"
import {React , useState , useEffect} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Products = () => {
    const [data , setData ] = useState([]);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
            setData(res.data)
            setLoading(false)
        })
    }, [])


const Loading = () => 
{
    return(
        <>
        <p className="text-center display-6">Loading ...</p>
        </>
    )
}
const ShowProducts = () =>
{
    return(
        <>
        {
            data.map((val,index)=>
            {
                return(
                    <>
                    <div className="card_head col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 mb-4" key={index}>
                        <div className="card h-100 text-center p-2" key={val.id} key={index}>
                        <img src={val.image} className="card-img-top" alt={val.title} height="200px" />
                        <div className="card-body">
                            <h6 className="card-title mb-0">{val.title.substring(0,20)}...</h6>
                            <p className="card-text lead fw-bold">${val.price}</p>
                            <NavLink to={`/products/${val.id}`} className="btn btn-outline-success">Buy Now</NavLink>
                        </div>
                        </div>
                    </div>
                    </>
                )
            })
        }
        </>
    )
}
    

 return(
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 mb-5">
            <p className="display-6 text-center">My Products</p>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
 )
};

export default Products;
