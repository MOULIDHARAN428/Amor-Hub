import React,{useState} from 'react';
import Chat from './Chat';
import io from "socket.io-client";

//const socket = io.connect("http://localhost:3001");
const socket = io.connect('https://amor-hub.herokuapp.com/');

function Chating(){
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
    const [userOnline,setUserOnline] = useState([0,0,0,0]);
    const [userName,setUserName] = useState([{},{},{},{}]);
    const [customRoom,setCustomRoom] = useState("0");
    const [roomUserID,setRoomUserID] = useState("1");
    
    const roomid =["kh23JM:CE2","kbn283:}DF2","DHKBjh891:><","dsvjh8237{}';"]


    socket.on('onlineUserNumber', (data)=>{
        setUserOnline(data);
    });
    socket.on('userNameOnline', (data)=>{
        setUserName(data);
    });
    

    const joinRoom = () =>{
        
        if (username!=="" && room!==""){
            socket.emit("join_room",room,username);
            setShowChat(true);
        }
        else if(username!==""){
            alert("Enter Room ID");
        }
        else if(room!==""){
            alert("Enter Username");
        }
        else{
            alert("Enter Username and Room Id");
        }

        if(room === "kh23JM:CE2"){setRoomUserID("0");setCustomRoom("1");}
        else if(room === "kbn283:}DF2"){setRoomUserID("1");setCustomRoom("1");}
        else if(room === "DHKBjh891:><"){setRoomUserID("2");setCustomRoom("1");}
        else if(room === "dsvjh8237{}';"){setRoomUserID("3");setCustomRoom("1");}
    };

    return(
        <>
        <div className='chat-css'>
            {!showChat ? (
                <>

                    <div className="chatroom-window">
                        <div className="chatroom-header">
                            <p>Chat Room</p>
                        </div>
                        <div className="chatroom-body">
                            <div  className="split-room"></div>
                            <div className="room-details" onClick={e => setRoom(roomid[0])}>
                                Looking for partner
                                <p>{userOnline[0]}</p>
                            </div>
                            <div  className="split-room"></div>
                            <div className="room-details" onClick={e => setRoom(roomid[1])}>
                                Looking for friends
                                <p>{userOnline[1]}</p>
                            </div>
                            <div  className="split-room"></div>
                            <div className="room-details" onClick={e => setRoom(roomid[2])}>
                                Just chilling
                                <p>{userOnline[2]}</p>
                            </div>
                            <div  className="split-room"></div>
                            <div className="room-details" onClick={ e => setRoom(roomid[3])}>
                                Let's make some cringe
                                <p>{userOnline[3]}</p>
                            </div>
                        </div>
                    </div>

                    <div className='joinChatContainer'>
                        <h3>Join a chat</h3>
                        <input type="text" placeholder="Name..." onChange={(event)=>{ setUsername(event.target.value)}}/>
                        <input value={room} type="text" placeholder="Room ID..." onChange={(event)=>{ setRoom(event.target.value)}}/>
                        <button onClick={joinRoom}>Join a room</button>
                    </div>
                </>
                
            ) : (
                <>  
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <Chat socket={socket} username={username} room={room}/>
                        {customRoom === "1" ? (
                            <>
                                <div className="col-sm-1"></div>
                                <div className="chatroom-window">
                                    <div className="chatroom-header">
                                        <p>Online &ensp;[ {userOnline[roomUserID]+1} ]</p>
                                    </div>
                                    
                                        <div className="chatroom-body-online chat-body">
                                            <div  className="split-room"></div>
                                                <div className="room-details" onClick={e => setRoom(roomid[0])}>
                                                    {username}  (you)
                                                    <p>🟢</p>
                                            </div>

                                            {Object.entries(userName[roomUserID])
                                            .map( ([key, value]) => 
                                            <>
                                                <div  className="split-room"></div>
                                                <div className="room-details" onClick={e => setRoom(roomid[0])}>
                                                    {value}
                                                    <p>🟢</p>
                                                </div>
                                            </>
                                            
                                                
                                            )}
                                            
                                        </div>
                                    
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                        
                    
                    </div>
                </div>
                    
                    
                </>
                

            )}            
        </div>    
        </>
    );
}

export default Chating;