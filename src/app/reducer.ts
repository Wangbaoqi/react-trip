
import countReducer from "../components/counter/counterSlice"
import flyIndexReducer from "@/views/airport/flyIndex/FlyIndexSlice"


const reducer = {
  counter: countReducer,
  flyIndex: flyIndexReducer
}

export default reducer