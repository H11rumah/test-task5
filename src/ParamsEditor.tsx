import React, { useState } from "react";

interface Param {
    id: number;
    name: string;
    type: string;
}

interface ParamValue {
    paramId: number;
    value: string | number;
}

interface Model {
    paramValues: ParamValue[];
}

interface ParamsEditorProps {
    params: Param[];
    model: Model;
}

const ParamsEditor: React.FC<ParamsEditorProps> = ({ params, model }) => {
    let [modelCopy, setModelCopy] = useState<Model>(JSON.parse(JSON.stringify(model)));

    function getModel() {
        console.log(modelCopy);
    }

    return (
        <div className="paramsEditor">
            {modelCopy.paramValues.map((elem, id) => {
                return (
                    <label>
                        <span>{params[id].name}</span>
                        <input
                            type={params[id].type}
                            value={elem.value}
                            onChange={(event) => {
                                let newModel = {
                                    paramValues: [...modelCopy.paramValues],
                                };

                                newModel.paramValues[id].value = event.target.value;

                                setModelCopy(newModel);
                            }}
                        />
                    </label>
                );
            })}
            <button onClick={() => getModel()}>getModel</button>
        </div>
    );
};

export default ParamsEditor;
