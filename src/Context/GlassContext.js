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
    return <MyGlassContextTwo.Provider
    value={10}
    >
    </MyGlassContextTwo.Provider>
}

export {FirstGlassProvider};
export {SecondGlassProvider};

export const GlassOneCTX = ({children}) =>
{
    return <MyGlassContext.Provider value={0}>
        {children}
    </MyGlassContext.Provider>
}

const GlassTwoCTX = ({children}) => {
    return <MyGlassContextTwo.Provider value={10}>
        {children}
    </MyGlassContextTwo.Provider>
}
export {GlassTwoCTX}