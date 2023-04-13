import { useContext } from "react";
import NavigationContext from "../context/navigation";

//to is path we want to navigate, children is some text we want to show inside anchor element
function Link({ to, children }) {
  //this gives back entire object we're sharing, but we only want navigate.
  const { navigate } = useContext(NavigationContext);

  //purpose is to stop total page refresh with navigation
  const handleClick = (event) => {
    //this if statement lets a ctrl click open a new tab. plus added href to <a> tag.
    if (event.metaKey || event.ctrlKey) {
        return;
    }
    event.preventDefault();
    //programmatically navigate to some other route.
    //navigate function inside provider lets us. reach into context and get navigate function.
    //import usecontext & navigation context uptop
    navigate(to);
  };

  return <a href={to} onClick={handleClick}>{children}</a>;
}

export default Link;
