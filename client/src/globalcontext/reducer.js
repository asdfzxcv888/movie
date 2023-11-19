const reducer=(state,action)=>{
    
    if(action.type==='isuser'){
        
        return {...state,isuser:!state.isuser}
    }
    if(action.type==='logout'){
        
        return {...state,user:''}
    }

    if(action.type==='login success'){
        
    return state={...state,user:action.payload.user,msg:action.payload.msg?action.payload.msg:'login successful please wait...'}}


    if(action.type==='loginfail'){
        
    return state={...state,msg:action.payload.error}}
    
    if(action.type==='movie'){
        return state={...state,movie:action.payload.movie}
    }
    if(action.type==='search'){
        return state={...state,movies:action.payload.value}
    }
    if(action.type==='clearmsg'){
        return {...state,msg:''}
    }


    return state
}

export default reducer