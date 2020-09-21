import React, { createContext } from "react";

const MyGlassContext = createContext(0);
const MyGlassContextTwo = createContext(10);

export {MyGlassContext};
export {MyGlassContextTwo};

function FirstGlassProvider()
{
    return <MyGlassContext.Provider
    value={0}
    >
    </MyGlassContext.Provider>

}

function SecondGlassProvider()
{
    return <MySecondGlassContext.Provider
    value={10}
    >
    </MySecondGlassContext.Provider>
}

export {FirstGlassProvider};
export {SecondGlassProvider};