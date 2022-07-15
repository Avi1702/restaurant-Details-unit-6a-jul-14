import React from 'react'

export const RestauranDetails = ({dataParam}) => {

    const [data,setData]=React.useState(dataParam)
   

React.useEffect(()=>{

},[data])

    function handleSort(value){
      console.log(value)


     switch(value){
      case "Above_4":
        const Above4=dataParam.filter((item)=>item.rating>=4)
        setData(Above4)
        break;
      case "Above_3":
        const Above3=dataParam.filter((item)=>item.rating>=3)
        setData(Above3)
        break;
      case "Above_2":
        const Above2=dataParam.filter((item)=>item.rating>=2)
        setData(Above2)
        break;
      case "Above_1":
        const Above1=dataParam.filter((item)=>item.rating>=1)
        setData(Above1)
        break;
        default:
          console.log("sorry")
     }
     }

     const handlePayment=(value)=>{
      switch(value){
        case "Cash":
          const cash=dataParam.filter((item)=>item.payment_mode==="Accepts Cash Only")
          setData(cash)
          break;
          case "Online":
            const online=dataParam.filter((item)=>item.payment_mode==="Accepts card Payment")
            setData(online)
            break;
            case "All":
              const all=dataParam.filter((item)=>item.payment_mode==="All Payment Modes")
              setData(all)
              break
            default:
              console.log("couldn't sort")            }
     }

     const handleOrder=(value)=>{
    
      switch(value){
        case "high to low":
         console.log("hi")      
        break;

         default:
          console.log("error")     
      }
     }

     
  return (
    <div>
        <h1 style={{color:"purple",textAlign:"center",fontSize:"32px"}}>Welcome You All  💁</h1>
      
     <div id="sorting"> 
    <div> 
        <lable style={{color:"green",fontSize:"18px"}}>Sort by Ratings:</lable>
        <button   onClick={()=>{handleSort("Above_4")}}>Above 4⭐</button>
        <button   onClick={()=>{handleSort("Above_3")}}>Above 3⭐</button>
        <button   onClick={()=>{handleSort("Above_2")}}>Above 2⭐</button>
        <button   onClick={()=>{handleSort("Above_1")}}>Above 1⭐</button>
    </div>
    <div>
        <lable  style={{color:"orange",fontSize:"18px"}}>Sort by Payment : </lable>
        <button onClick={()=>(handlePayment("Cash"))}>Cash Only</button>
        <button onClick={()=>(handlePayment("Online"))}>Card Accepted</button>
        <button onClick={()=>(handlePayment("All"))}>All</button>
     </div>
     <div>
        <lable style={{color:"red",fontSize:"18px"}}>Sort by Range : </lable>
        <button onClick={()=>(handleOrder("high to low"))}>High to Low</button>
        <button onClick={()=>(handleOrder("low to high"))}>Low to High</button>

     </div>
     </div>
        
         <div id='grid'>
            {/* <h1 style={{color:"purple"}}>Welcome</h1> */}
           {data.map((item)=>{
            return <div id='card'>
              
              <div className="child"><img src={item.image} /></div>
              <div id="middleOne" className="child">
                <h3 style={{margin:"0px"}}>{item.restaurant}</h3>
                <span id="bold">{item.catagories}</span>
                <span class="gray">cost ${item.cost_for_two} for two</span>
                <span class="gray">min $3 UPTO 30 min</span>
                <span class="green">{item.payment_mode}</span>
              </div>
              <div id="lastOne" className="child">
                <button style={{backgroundColor:"green",border:"none",borderRadius:"10px",color:"white"}}>{item.rating}⭐</button>
                <span>{item.reviews}reviews</span>
                <span>{item.total_votes}votes</span>
              </div>
             
        
            </div>
            {/* <button style={{backgroundColor:"green",color:"white",padding:"5px",alignItems:"end"}}>Order</button>
            </div> */}
             
           })}
           
        </div>
        </div>
    
  )
}
