import {Text, Heading, Img} from "./..";
import React from "react";
export default function HomeMembership({
    userImage ="images/img_icon.svg",
    connectAndCollaborateText = "Connect and Collaborate", 
    loremIpsumText, 
    ...props
}) {
    return(
        <div {...props} className={${props.className} flex flex-col w-}></div>
    )
}