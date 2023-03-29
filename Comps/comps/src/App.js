import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
        id: 'dfjplkj',
      label: "Can I use react on a project?",
      content:
        "You can use react on any project. You can use react on any project. You can use react on any project. You can use react on any project.",
    },
    {
        id: 'dfawed',
      label: "Can I use Javascript on a project?",
      content:
        "You can use react on any project. You can use react on any project. You can use react on any project. You can use react on any project.",
    },
    {
        id: 'dfjdfeasplkj',
      label: "Can I use CSS on a project?",
      content:
        "You can use react on any project. You can use react on any project. You can use react on any project. You can use react on any project.",
    }
  ];

  return <Accordion items = {items}/>;
}

export default App;
