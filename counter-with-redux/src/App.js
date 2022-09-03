import {useSelector,useDispatch} from "react-redux";
import {increMENT,decreMENT} from "./actions/index"
function App() {
    const myState=useSelector((state)=>state.changeTheValue)
    const dispatch=useDispatch();
  return (
    <div className="App">
   <main className=" flex justify-center py-24 px-48 bg-yellow-100 space-x-3">
   
      <div className="flex justify-center bg-orange-500 w-16 py-3 cursor-pointer"
      onClick={()=>dispatch(increMENT())}
      >+</div>
     
        <input className="flex justify-center align-middle bg-orange-500 w-12 py-3 text-center" value={myState}/>
    
      <div className="flex justify-center align-middle bg-orange-500 w-16 py-3 cursor-pointer"
      onClick={()=>dispatch(decreMENT())}
      >-</div>
 
   </main>
    </div>
  );
}

export default App;
