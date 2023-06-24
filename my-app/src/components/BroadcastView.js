import React, { useEffect, useRef } from 'react';
import { ws, openPromise } from '../utils/WebSocketClient';
import Chat from './Chat'

function BroadcastView() {
  const videoRef = useRef(null);
  const peerConnection = useRef(new RTCPeerConnection());

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        stream.getTracks().forEach(track => {
          peerConnection.current.addTrack(track, stream);
        });

        peerConnection.current.createOffer()
          .then(offer => peerConnection.current.setLocalDescription(offer))
          .then(() => {
            openPromise.then(() => {
              ws.send(JSON.stringify(peerConnection.current.localDescription));
            });
          });
      })
      .catch(err => {
        console.log("Something went wrong!", err);
      });
  }, []);

  return (
    <div className="BroadcastView">
      <video ref={videoRef} autoPlay playsInline />
      <Chat/>
    </div>
  );
}

export default BroadcastView;
