import React from "react";
import "./App.scss";
import ParamsEditor from "./ParamsEditor";

const App: React.FC = () => {
    let params = [
        {
            id: 1,
            name: "Назначение",
            type: "text",
        },
        {
            id: 2,
            name: "Длина",
            type: "text",
        },
        {
            id: 3,
            name: "Размер",
            type: "number",
        },
    ];

    let model = {
        paramValues: [
            {
                paramId: 1,
                value: "повседневное",
            },
            {
                paramId: 2,
                value: "макси",
            },
            {
                paramId: 3,
                value: 12,
            },
        ],
    };

    return (
        <div className="App">
            <ParamsEditor params={params} model={model} />
        </div>
    );
};

export default App;
