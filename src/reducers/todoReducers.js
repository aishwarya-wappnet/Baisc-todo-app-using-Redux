// reducers hold your current state and actions
const initialData = {
    list : []
}

//  const [list, setList] = useState([])
// initialData is just like list in the above example. In redux we setList(or change state) as below

const todoReducers = (state=initialData, action) => {
    switch(action.type) {
            case "ADD_TODO" :
            const  { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                {
                    id: id,
                    data: data
                }
            ]}

            case "DELETE_TODO" :
                const newList = state.list.filter((elem) => elem.id !== action.id);
                return {
                    ...state,
                    list: newList
                } 
            
            case "REMOVE_TODO": 
            return {
                ...state,
                list: []
            }
               
            default:
            return state;
    }
}

export default todoReducers;