import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
import CountryItem from "./components/CountryItem";
import CountryList from "./components/CountryList";
import Form from "./components/Form";
function App() {
  const [cities, setCities] = useState([]);
  // const countries = cities.map((city) => city.country);
  useEffect(function () {
    async function fetchData() {
      const res = await fetch("http://localhost:8000/cities");
      const data = await res.json();
      console.log(data);
      setCities(data);
      // setCountry(cou)
    }
    fetchData();
  }, []);
  // console.log(countries);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout cities={cities} />}>
          <Route index element={<CityList cities={cities} />} />
          <Route path="cities" element={<CityList cities={cities} />} />
          <Route path="country" element={<CountryList cities={cities} />} />
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
      ;
    </BrowserRouter>
  );
}

export default App;
