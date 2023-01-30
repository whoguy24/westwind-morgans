const serverReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_SERVER':
        return {...action.payload};
      case 'LOADING_TRUE':
        return {
          result:state.result,
          userbar:state.userbar,
          loading:true, 
          loading_duration:state.loading_duration,
          toast_open:state.toast_open,
          toast_autoHideDuration:state.toast_autoHideDuration, 
          toast_severity:state.toast_severity, 
          toast_variant:state.toast_variant,
          toast_description:state.toast_description
      };
      case 'LOADING_FALSE':
        return {
          result:state.result,
          userbar:state.userbar,
          loading:false, 
          loading_duration:state.loading_duration,
          toast_open:state.toast_open,
          toast_autoHideDuration:state.toast_autoHideDuration, 
          toast_severity:state.toast_severity, 
          toast_variant:state.toast_variant,
          toast_description:state.toast_description
      };
      case 'TOAST_OPEN':
        return {
          result:state.result,
          userbar:state.userbar,
          loading:false, 
          loading_duration:state.loading_duration,
          toast_open:true,
          toast_autoHideDuration:state.toast_autoHideDuration, 
          toast_severity:state.toast_severity, 
          toast_variant:state.toast_variant,
          toast_description:state.toast_description
      };
      case 'TOAST_CLOSE':
        return {      
          result:state.result,    
          userbar:state.userbar,
          loading:false, 
          loading_duration:state.loading_duration,
          toast_open:false,
          toast_autoHideDuration:state.toast_autoHideDuration, 
          toast_severity:state.toast_severity, 
          toast_variant:state.toast_variant,
          toast_description:state.toast_description};
      case 'USERBAR_TRUE':
        return {
          result:state.result,
          userbar:true,
          loading:state.loading, 
          loading_duration:state.loading_duration,
          toast_open:state.toast_open,
          toast_autoHideDuration:state.toast_autoHideDuration, 
          toast_severity:state.toast_severity, 
          toast_variant:state.toast_variant,
          toast_description:state.toast_description
      };
      case 'USERBAR_FALSE':
        return {
          result:state.result,
          userbar:false,
          loading:state.loading, 
          loading_duration:state.loading_duration,
          toast_open:state.toast_open,
          toast_autoHideDuration:state.toast_autoHideDuration, 
          toast_severity:state.toast_severity, 
          toast_variant:state.toast_variant,
          toast_description:state.toast_description
      };
      default:
        return state;
    }
};
  
export default serverReducer;
export const serverStore = state => state.server