import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordian", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
  ];

  const renderedLinks = links.map((link) => {
    //the classname prop is from the link component, adding it as a prop to customize this particular instance of link.
    //the active classname is a dynamic styling given to the link/path that matches the current path.
    return (
      <Link key={link.label} to={link.path} className="mb-3" activeClassName="font-bold border-l-4 border-blue-500 pl-2"> 
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
