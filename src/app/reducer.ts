
import countReducer from "../components/counter/counterSlice"
import flyIndexReducer from "@/views/airport/flyIndex/flyIndexSlice"


const reducer = {
  counter: countReducer,
  flyIndex: flyIndexReducer
}

export default reducer