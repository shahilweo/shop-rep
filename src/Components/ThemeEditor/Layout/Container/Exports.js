import React from "react";
import Header from "./Components/Header/Header";

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
        </>
    )
}