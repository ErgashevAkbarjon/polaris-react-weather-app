import React, { useState, useEffect } from "react";
import enTranslations from "@shopify/polaris/locales/en.json";
import {
    AppProvider,
    Page,
    Spinner,
    DisplayText,
    Card
} from "@shopify/polaris";
import CitySelector from "./components/CitySelector";

const cities = ["Dushanbe", "Moscov", "New-York"];

const currentLocation = cities[0];

const openWeatherApiKey = "2433e639987bfba3d32b434e917d92b4";

function App(props) {
    const [weather, setWeather] = useState();
    const [city, setCity] = useState(currentLocation);

    const fetchWeatherData = () => {
        const apiEndpointURL =
            "http://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric" +
            "&appid=" +
            openWeatherApiKey;

        fetch(apiEndpointURL)
            .then(res => res.json())
            .then(data => setWeather(data.main));
    };

    useEffect(() => {
        fetchWeatherData();
    }, [city]);

    const onCitySelected = selectedCity => {
        setCity(selectedCity);
    };

    return (
        <AppProvider i18n={enTranslations}>
            <Page title="Weather">
                <Card sectioned>
                    <div className="centered">
                        {weather ? (
                            <>
                                <DisplayText size="large">{city}</DisplayText>
                                <DisplayText size="extraLarge">
                                    {weather.temp} °C
                                </DisplayText>
                            </>
                        ) : (
                            <Spinner size="large" color="teal" />
                        )}
                    </div>

                    <CitySelector
                        cities={cities}
                        onCitySelected={onCitySelected}
                    />
                </Card>
            </Page>
        </AppProvider>
    );
}

export default App;
