
import countReducer from "@/components/extra/counter/counterSlice"
import flyIndexReducer from "@/views/airport/flyIndex/flyIndexSlice"


const reducer = {
  counter: countReducer,
  flyIndex: flyIndexReducer
}

export default reducer