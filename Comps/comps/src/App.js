import Link from "./components/Link";
import Route from "./components/Route";
import AccordianPage from './pages/AccordianPage'
import DropdownPage from "./pages/DropdownPage";


function App() {
    return (
 <div>
    <Link to="/accordion">Go to accordion</Link>
    <Link to="/dropdown">Go to dropdown</Link>
    <div>
        <Route path="/accordion">
            <AccordianPage />
        </Route>
        <Route path="/dropdown">
            <DropdownPage />
        </Route>
    </div>
    
 </div>
 )
}

export default App;
