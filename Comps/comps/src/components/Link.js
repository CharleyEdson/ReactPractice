import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";
//imports below are used without hook - the main difference w/using hook and not is, for now, is one import & setting navigate to useNavigation(), since hook imports the context.
// import { useContext } from "react";
// import NavigationContext from "../context/navigation";

//to is path we want to navigate, children is some text we want to show inside anchor element
// using classname as a prop, allowing developers to give a prop so the link bar's don't have to have margin or any other styling.
function Link({ to, children, className, activeClassName }) {
  //this gives back entire object we're sharing. pulling out currentPath to dynamically styalize depending on which path you're at.
//   const { navigate } = useContext(NavigationContext); this is used without hook.
    const {navigate, currentPath} = useNavigation();

  //this is for styling. usingclassNames as a helper to add in new ones. added as classname in <a>.
  //the 3rd prop, is for dynamic styling, if currentPath equals the path, then it will pass in activeclass name to style sidebar.
  const classes = classNames('text-blue-500', className, currentPath=== to && activeClassName);

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

  return <a className={classes} href={to} onClick={handleClick}>{children}</a>;
}

export default Link;
