import React  from 'react';

const CartItem = (props)=>  {
    let {price , title , quantity, img} = props.product;
    let {product , onInc , onDec , onDel} = props;
        return (
            <div  className='cart-item'> 
                <div className='left-block'>
                    <img style = { styles.image} src= {img} alt = ""/>
                </div>
                <div className='right-block'>
                    <div style={{color:"#777"}}>{title}</div>
                    <div style={{fontSize:25}}>Rs {price} </div>
                    <div style={{ontSize:25}}>Quantity:{quantity} </div>
                    <div className='cart-item-actions'>
                    <img 
                    onClick = {()=>{onInc(product)}}
                    alt = "increasee "
                    src='https://cdn-icons.flaticon.com/png/512/1665/premium/1665629.png?token=exp=1643640621~hmac=f11bcff172f9c2bb4f1c85e98842af3a' 
                     className='action-icons'
                     />
                    <img 
                      onClick ={()=>{ onDec(product)}}
                    alt =" decrease " 
                    src='https://cdn-icons.flaticon.com/png/512/1665/premium/1665663.png?token=exp=1643640664~hmac=6ca5a5cf518ffebff65aeae9573a798d'
                     className='action-icons'
                    />
                    <img 
                     onClick = {()=>onDel(product.id)}
                    alt =" delete " 
                    src='https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1643640700~hmac=fa53e31419089ade790d523d0b42dd61'
                     className='action-icons'
                    />
                    </div>
                </div>
            </div>
        );
}
const styles = {
    image:{
        height:110,
        width: 110,
        borderRadius:4,
        background : "#ccc"
    }
}

export default CartItem;