const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());

var onlineNumber = [0,0,0,0];
var userRoom = {};
var userName = [{},{},{},{}];

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:"*", //to accept specific URL or "*"
        methods: ["GET","POST"]
    }
});

io.on("connection", (socket) => {
    console.log(`User Connected : ${socket.id}`);
    socket.emit("me", socket.id);

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});

    socket.on("join_room",(data,username)=>{
        socket.join(data);
        if(data==="kh23JM:CE2"){onlineNumber[0]++;userRoom[socket.id]=0;userName[0][socket.id]=username;}
        else if(data==="kbn283:}DF2"){onlineNumber[1]++;userRoom[socket.id]=1;userName[1][socket.id]=username;}
        else if(data==="DHKBjh891:><"){onlineNumber[2]++;userRoom[socket.id]=2;userName[2][socket.id]=username;}
        else if(data==="dsvjh8237{}';"){onlineNumber[3]++;userRoom[socket.id]=3;userName[3][socket.id]=username;}
        console.log(`User with ID : ${socket.id} joined room : ${data}`);
    });

    socket.emit("onlineUserNumber", onlineNumber);
    socket.emit("userNameOnline",userName);

    socket.on("send_message", (data) =>{
        socket.to(data.room).emit("receive_message",data);
    });


    socket.on("disconnect", () => {
        
        socket.broadcast.emit("Disconneted");

        for (const [key, value] of Object.entries(userRoom)) {
            if(key === socket.id){
                delete userRoom.key;
                onlineNumber[value]-=1;
            }
        }

        for(var i=0; i<4; i++){
            for (const [key, value] of Object.entries(userName[i])) {
                if(key === socket.id){
                    delete userName[i][key];
                    // console.log(userName);
                }
            }
        }
        
        // console.log(onlineNumber);
        console.log("User Disconnected : ", socket.id);
    });

    socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded");
	});
});

// server.listen(3001, () => {
//     console.log("Server running in localhost:3001");
// });

const PORT = process.env.PORT || 3001;
app.get("/",(req,res)=>{
    res.send('Server is running');
});
server.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));