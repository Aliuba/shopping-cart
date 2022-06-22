import {CartState} from "../context/Context";
import SingleProduct from "./SingleProduct";
import './styles.css'
import Filters from "./Filters";
import {number} from "prop-types";
const Home = () => {
    const {state:{products}, productState:{sort, byStock, searchQuery}}=CartState();
    console.log(products);
    const transformProducts=()=>{
        let sortedProducts=products
        if(sort){
            sortedProducts=sortedProducts.sort((a,b)=>
                sort==="LowToHigh"? a.price-b.price: b.price-a.price
            )
        }
        if(!byStock){
            sortedProducts=sortedProducts.filter((prod)=>Number(prod.inStock) !==0)

        }
        if(searchQuery){
            sortedProducts=sortedProducts.filter((prod)=>prod.name.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        return sortedProducts
    }
    return (
        <div className={'home'}>
            <Filters/>
            <div className={'productContainer'}>
                {transformProducts().map((prod)=> <SingleProduct key={prod.id} prod={prod}/>
                )}
            </div>

        </div>
    );
}
export default Home
