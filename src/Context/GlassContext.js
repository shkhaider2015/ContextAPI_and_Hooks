import { createContext } from "react";

const MyGlassContext = createContext(0)
const MyGlassContextTwo = createContext(10);

export {MyGlassContext};
export {MyGlassContextTwo};

export function updateCTXOne()
{
    MyGlassContext = MyGlassContext + 1
    return MyGlassContext
}
