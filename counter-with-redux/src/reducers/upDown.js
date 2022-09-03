const initialState=0;

export const changeTheValue=(state=initialState,action)=>
{
     switch (action.type)
     {
        case "INCREMENT": return state+1;
        
        case "DECREMENT": 
        if(state===0)
        {
            return;
        }
        else{
           return state-1
        }
        case "RESETCOUNTER":return 0;
        default : return state;
     }
}