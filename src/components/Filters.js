import {Button, FormCheck} from "react-bootstrap";
import "./styles.css"
import {CartState} from "../context/Context";
const Filters=()=>{

    const {productState: {byStock, sort}, productDispatch}=CartState();
    {console.log( byStock)}
    return(

        <div className={'filters'}>
            <span className={'title'}>Filter products </span>
            <span>
                <FormCheck
                inline
                label={'Ascending'}
                name={'group1'}
                type={'radio'}
                id={`inline-1`}
                onChange={()=>productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "LowToHigh"
                })}
                checked={sort==="LowToHigh"? true: false}
                />
            </span>
            <span>
                <FormCheck
                inline
                label={'Descending'}
                name={'group1'}
                type={'radio'}
                id={`inline-2`}
                onChange={()=>productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "HighToLow"
                })}
                checked={sort==="HighToLow"? true: false}
                />
            </span> <span>
                <FormCheck
                inline
                label={'include out of stock'}
                name={'group1'}
                type={'checkbox'}
                id={`inline-3`}
                onChange={()=>productDispatch({
                    type:"FILTER_BY_STOCK"
                })}
                checked={byStock}
                />
            </span>


<Button variant={'light'} onClick={()=>productDispatch({
    type: "CLEAR_FILTERS"
})}>Clear Filters</Button>

        </div>
    )
};
export default Filters;
