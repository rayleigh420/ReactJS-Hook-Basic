import React, { useState } from "react";
import 'antd/dist/antd.css';
import { Avatar } from "antd";

const AvatarP = () => {
    const [participant, setParticipant] = useState([
        { url: "https://www.partyanimalsgame.com/static/avatars-07_Carrot.png", name: 'Duy' },
        { url: "https://www.partyanimalsgame.com/static/avatars-01_Underbite.png", name: 'Tan' },
        { url: "https://www.partyanimalsgame.com/static/avatars-08_Otter.png", name: 'Bao' },
        { url: "https://www.partyanimalsgame.com/static/avatars-07_Carrot.png", name: 'Quoc' },
        { url: "https://www.partyanimalsgame.com/static/avatars-11_Unicorn.png", name: 'Long' },
        { name: 'Duy' }
    ])
    return (
        <>
            <Avatar.Group>
                {participant.map(item => (
                    <Avatar src={item.url}>{item.url ? '' : item.name[0].toUpperCase()}</Avatar>
                ))}
            </Avatar.Group>
        </>
    )
}

export default AvatarP