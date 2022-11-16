import React,{useState} from 'react';

const AddItem = ()=>{

    const [item,setItem]=useState();
    const [list,setList]=useState([]);
    const [total,setTotal]=useState(0);
    const [getName, setName] = useState(false);

        const handleNameChange = () => {
            setName(!getName); 
        }


    const [showAddItem,setShowAddItem]= useState(false);

    function addName(e){
        const {name,value} = e.target;
        setItem(preState=>({...preState,[name]:value}))
    }

    function AddToList(){
        const listTemp=[...list];
        listTemp.push(item);
        setList(listTemp);   

        setTotal(parseInt(total)+ (parseInt(item.price)*parseInt(item.quantity)))
    }

    function deleteList(index){
        
        const listTemp=[...list]; 
        listTemp.splice(index,1);
        setList(listTemp);   

        console.log(listTemp);

        console.log(list);
        console.log(index);
        setTotal(parseInt(total) - (parseInt(item.price)*parseInt(item.quantity)))
    }

    return (<div className='addList'>
        
        <h1>Add item</h1>
        <button 
        
        onClick={()=>{setShowAddItem(!showAddItem);handleNameChange()}}>{getName?"back":"AddItem"}</button>

        

        <div className='input'>
        <input type="text" placeholder='Item'
        name='name'
        onInput={addName}
        ></input>
        <input type="text" placeholder='quantity'
        name='quantity'
        onInput={addName}
        ></input>
        <input type="text" placeholder='price'
        name='price'
        onInput={addName}
        ></input>
        <button onClick={AddToList}>Add</button>

        </div>


    
        {
            showAddItem ? 
            
            <div className='table'>
            <table>
                <thead>
                <tr>
                    <th>S.no</th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>

                {list.map((item,index)=><tr className='tableRow' key={index}>
                <td>{index+1+" "}</td>
                <td> {item.name}</td>
                <td> {item.quantity}</td>
                <td> {item.price}</td>
                
                <td>
                    <input type='checkbox' ></input>
                    <button onClick={()=>{deleteList(index)}}>del</button>
                </td>
            </tr>)}
                </tbody>           
            </table>
            <div><h2>Totoal</h2>
            <div> {total}</div>
            </div>
 
        </div>:<></>}
    </div>)
}

export default AddItem;