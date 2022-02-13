import React,{} from 'react';
import {Button} from 'react-bootstrap';
function Home(props) {
    return(
        <>
            <div className="spltter-home"></div>
            <div className="container main-body-home">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5">
                        <img src="/assets/image/love-1.png" alt=""></img>
                    </div>
                    <div className="col-sm-5 quotes-doctor">
                        <h4>
                            Love is what happens when two hearts find their happy place right beside each other.
                        </h4>
                        <h7>Have a chat room ID, then click the button to have a chat with your partner.  </h7>
                        <h7> Don't you have a chat room ID? Join the public room to find your partner.</h7>
                        <p><Button type="button" class="btn btn-dark" href="/chat">Chat Room 💬</Button>{' '}
                        <i className="button-padding"></i>
                        <Button type="button" class="btn btn-danger" href="#">Donate $</Button></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5 quotes-doctor quotes-doctor-right">
                        <h4>
                            If I had a flower every time I think of you... I could walk through my garden forever.
                        </h4>
                        <h7>Have you got a video room ID? Why don't you have fun right now? Click the button below.</h7>
                        <p><Button type="button" class="btn btn-dark" href="/video">Video Room 📹</Button>{' '}
                        <i className="button-padding"></i>
                        <Button type="button" class="btn btn-danger" href="#">Donate $</Button></p>
                    </div>
                    <div className="col-sm-5">
                        <img src="/assets/image/love.png" alt=""></img>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;