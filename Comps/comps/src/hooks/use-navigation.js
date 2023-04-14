import NavigationContext from "../context/navigation";
import {useContext} from 'react';

function useNavigation() {
    return useContext(NavigationContext);

}

export default useNavigation;

//this hook saves tiny bit of code by not having to import the context, navigation.js file.