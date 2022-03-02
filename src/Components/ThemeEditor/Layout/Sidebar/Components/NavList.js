
import React from "react";
import { Link} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function NavList({ data }) {
    return (
        <Link href={data.current.link} underline="hover" sx={{ pb: 2, display: "block" }}>
            {data.current.name} <OpenInNewIcon fontSize="inherit" sx={{ verticalAlign: 'middle' }} />
        </Link>
    )
}