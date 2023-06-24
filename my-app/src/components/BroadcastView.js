import React, { useEffect, useState, useRef } from 'react';
import { ws, openPromise } from '../utils/WebSocketClient';
import '../css/BroadcastView.css';

function BroadcastView() {
  const videoRef = useRef(null);
  const peerConnection = useRef(new RTCPeerConnection());
  const [error, setError] = useState(null);

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
        setError("Live stream will be right back.");
      });
  }, []);

  return (
    <div className="BroadcastView">
      <video ref={videoRef} autoPlay playsInline />
      {error && <div>{error}</div>}
    </div>
  );
}

export default BroadcastView;
