import { useSelector, useDispatch } from "react-redux";
import { increMENT, decreMENT, resetCounter } from "./actions/index";
function App() {
  const myState = useSelector((state) => state.changeTheValue);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <main className="  justify-center py-48 px-48 bg-yellow-100 space-x-3">
        <h1 className="text-center mb-16 font-bold text-purple-600 text-5xl">
          Simple Redux Counter
        </h1>
        <section className=" flex justify-center ">
          <div
            className="flex justify-center bg-orange-500 w-16 py-3 cursor-pointer mx-2  rounded-md text-3xl font-extrabold"
            onClick={() => dispatch(increMENT())}
          >
            +
          </div>

          <input
            className="flex justify-center align-middle bg-orange-500 w-12 py-3 text-center mx-2 rounded-md text-3xl "
            value={myState}
          />

          <div
            className="flex justify-center align-middle bg-orange-500 w-16 py-3 cursor-pointer rounded-md text-3xl font-extrabold"
            onClick={() => dispatch(decreMENT())}
          >
            -
          </div>
          <div
            className="flex justify-center bg-orange-500 w-24 py-3 px-7 cursor-pointer mx-2 rounded-md text-3xl align-middle"
            onClick={() => dispatch(resetCounter())}
          >
            Reset
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
