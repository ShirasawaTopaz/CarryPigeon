const ws = new WebSocket("ws://localhost:2024");

ws.onopen = function (){ }

ws.onmessage = function (v) { 
    const value = JSON.parse(v.data);
 }

ws.onclose = function () { 
    return;
 }

ws.onerror = function (e) { 
 }