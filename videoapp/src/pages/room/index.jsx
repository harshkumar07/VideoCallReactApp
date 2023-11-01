import React from "react";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

 const RoomPage  = () => {  
    const { roomId } = useParams();
    //const { userName } = useParams();

    const myMeeting = async (element) => {
        const appID = 1184618818;
        const serverSecret = "a8e5fb78d86a4bfebe0a1b7513fc9e1a";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret, 
            roomId,
            Date.now().toString(),
            "Harsh"
            );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                  name: 'Personal link',
                  url:
                   window.location.protocol + '//' + 
                   window.location.host + window.location.pathname +
                    '?roomId=' +
                    roomId,
                },
              ],
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
               },
            });
    };
    return(
        <div className="room-page">
            <div ref ={myMeeting}style={{ width: '100vw', height: '100vh' }}/>
        </div>
    )
 }

 export default RoomPage;