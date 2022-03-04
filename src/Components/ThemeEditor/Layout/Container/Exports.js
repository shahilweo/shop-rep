import React from "react";
import Header from "./Components/Header/Header";
import Heroslider from "./Components/Heroslider/Heroslider";

// export const blokImport = (arr) => {
//     return (
//         <React.Fragment>
//             {arr.map((opt, index) => {
//                 return (
//                     <Box key={index.toString()}>
//                         <BlockRenderFn data={opt} />
//                     </Box>
//                 )
//             })}
//         </React.Fragment>
//     )
// }

export default function BlockRenderFn({ type, data }) {
    return (
        <>
            {type === "header" &&
                <Header
                    data={data}
                />
            }
            {type === "hero_slider" &&
                <Heroslider
                    data={data}
                    type="hero"
                />
            }
        </>
    )
}