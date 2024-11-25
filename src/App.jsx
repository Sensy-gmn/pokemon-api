import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./app/store";
import DetailOnPokemon from "./Components/DetailOnPokemon";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";
import PokemonList from "./Components/PokemonList";

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pokemonList" element={<PokemonList />} />
                    <Route path="/pokemon/:id" element={<DetailOnPokemon />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}
