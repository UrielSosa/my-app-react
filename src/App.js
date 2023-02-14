/* Importaciones de react/react-router */
import { useState } from "react";
import { Switch, Route } from "react-router-dom";

/* Componentes */
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Gif from './components/Gif';
import Results from './pages/Results';
import NotFound from "./pages/NotFound";


const App = () => {
    const [lang, setLang] = useState("en");
    const [links, setLinks] = useState(["Home", "Services", "Projects", "Pages", "Contact", "Gif"]);

    const handleLinksLanguage = (langParam) => {
        let newLinks = ["Home", "Services", "Projects", "Pages", "Contact"];
        let newLang = "en";

        if (langParam === "en") {
            newLinks = ["Inicio", "Servicios", "Proyectos", " Páginas", "Contacto"];
            newLang = "es";
        }

        setLinks(newLinks);
        setLang(newLang);
    };

    return (
        <>
            <Header links={links} />
            <button className="btn btn-primary m-2" onClick={() => handleLinksLanguage(lang)}>
                {lang === "en" ? "ESPAÑOL" : "ENGLISH"}
            </button>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/services/:id" component={Detail} />
                <Route path="/movies/:id" component={Detail} />
                <Route path="/gif" component={Gif} />
                <Route path="/results" component={Results} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </>
    );
};

export default App;
