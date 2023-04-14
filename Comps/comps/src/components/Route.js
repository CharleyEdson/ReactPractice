import useNavigation from "../hooks/use-navigation";

//the imports below would be needed without hook. since using hook using imports above
// import {useContext} from 'react';
// import NavigationContext from '../context/navigation';

function Route({path, children}) {
    //would have been used if didn't use hook.
    // const {currentPath}=  useContext(NavigationContext);
    const {currentPath} = useNavigation();
    
    if(path === currentPath) {
        return children;
    }

    return null;
}

export default Route;