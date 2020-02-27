import React, { useState } from "react";
import { Autocomplete, Icon } from "@shopify/polaris";

function CitySelector({ cities }) {
    const [selected, setSelected] = useState();

    const updateSelection = newSelected => {
        setSelected(newSelected);
    };

    return (
        <div>
            <Autocomplete
                allowMultiple={false}
                options={cities}
                onSelect={updateSelection}
                selected={selected}
                textField={textField}
            />
        </div>
    );
}

export default CitySelector;
