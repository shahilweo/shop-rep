import React, { useEffect, useState } from "react";
import BorderTopIcon from '@mui/icons-material/BorderTop';
import BorderBottomIcon from '@mui/icons-material/BorderBottom';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ViewListIcon from '@mui/icons-material/ViewList';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ShortTextIcon from '@mui/icons-material/ShortText';
import RateReviewIcon from '@mui/icons-material/RateReview';
import RssFeedIcon from '@mui/icons-material/RssFeed';

export default function SectionIcons({ type }) {
    const [active, setActive] = useState("")
    useEffect(() => {
        if (type === "header") {
            return (
                setActive(<BorderTopIcon />)
            )
        }
        if (type === "footer") {
            return (
                setActive(<BorderBottomIcon />)
            )
        }
        if (type === "hero_slider") {
            return (
                setActive(<ViewCarouselIcon />)
            )
        }
        if (type === "content_block") {
            return (
                setActive(<VerticalSplitIcon />)
            )
        }
        if (type === "text_over_image") {
            return (
                setActive(<ChromeReaderModeIcon />)
            )
        }
        if (type === "gallery") {
            return (
                setActive(<DashboardIcon />)
            )
        }
        if (type === "text_column_with_image") {
            return (
                setActive(<LibraryBooksIcon />)
            )
        }
        if (type === "product_list") {
            return (
                setActive(<ViewListIcon />)
            )
        }
        if (type === "map") {
            return (
                setActive(<ShareLocationIcon />)
            )
        }
        if (type === "brands_list") {
            return (
                setActive(<VerifiedUserIcon />)
            )
        }
        if (type === "heading_text") {
            return (
                setActive(<ShortTextIcon />)
            )
        }
        if (type === "testimonials") {
            return (
                setActive(<RateReviewIcon />)
            )
        }
        if (type === "blog_post") {
            return (
                setActive(<RssFeedIcon />)
            )
        }

    }, [type])
    return (
        <React.Fragment>
            {active}
        </React.Fragment>
    )
}