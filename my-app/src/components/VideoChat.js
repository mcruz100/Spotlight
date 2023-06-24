import { io } from 'socket.io-client';

let pc = new RTCPeerConnection();

// Create a WebSocket connection to our server
let socket = io.connect('http://localhost:3000');

// Once the socket is connected, we can create an offer and set it as the local description
socket.on('connect', async () => {
    let offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    socket.emit('offer', offer);
});

// When we receive the answer, we set it as the remote description
socket.on('answer', async (answer) => {
    await pc.setRemoteDescription(answer);
});

// When we receive an ice candidate, we add it to the peer connection
socket.on('iceCandidate', (candidate) => {
    pc.addIceCandidate(candidate);
});

// Triggered when a new candidate is returned from STUN/TURN server
pc.onicecandidate = ({ candidate }) => {
    socket.emit('newIceCandidate', candidate);
};

// Data channels allow to send/receive text/binary data
let dataChannel = pc.createDataChannel('channel');

dataChannel.onmessage = (event) => {
    console.log('Received message', event.data);
};

dataChannel.onopen = () => {
    dataChannel.send('Hello, world!');
};

// Listen for remote data channel
pc.ondatachannel = (event) => {
    let channel = event.channel;
    channel.onmessage = (event) => {
        console.log('Received message', event.data);
    };
};
