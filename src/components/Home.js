import React from 'react'
import styled from 'styled-components';
function Home() {
    

    return (
        <div>
            <HomePage>
                <div className="home_container">
                    <div className="home_content">
                        <div className="home_content_info">
                            <p className="feature">Featured Project</p>
                            <span>
                                <p  className='title'>ESPN Body Issue</p>
                            <p className='sub-title'>Impressive body of work</p>
                            </span>
                            <a href="#" className='more'>More Project
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
                            </a>
                        </div>
                        <div className='thumb'>
                      <img src='https://images.prismic.io/ueno-www/fa980adb-f824-42d6-aae0-6df1d38aa6fc_espn-poster.jpg?auto=compress,format&quot;)'/>
                      </div>
                      <span className='blob'></span>

                    </div>
                    <div className="blob">
  
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
  <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
  </svg>
</div>

                </div>
            </HomePage>
            
        </div>
    )
}

export default Home
const HomePage = styled.div`
.home_container{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    margin-top:8rem;
    
}
.home_content{
    padding-left: 70px;
    padding-right: 70px;
    max-width: 1430px;
    display:flex;
}


.thumb{
    margin-left:auto;
    width:40rem;
    height:20rem;
    padding:0;
    margin-top:3.7rem;  
    transition: 0.8s all ease-in-out;
    position: relative;
    
    overflow: hidden;
 
}
 img{
    transform: scale(1);
overflow: hidden;
cursor: pointer;
background: 50% no-repeat;    
  width:39rem;
   height:19rem;
backgound-content: cover;
transition: 0.8s all ease-in-out;
}
.thumb:hover img{
    transform: scale(1.2);

}
.thumb:hover {
    width:38rem;
    height:18rem;
    transform: scaleX(1.1);
    transform: scaleY(1.1);
}
    .home_content_info{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        transition-duration: 5s;

    }
 
    .title,.sub-title{
        font-size:3rem;
        font-weight:300;
        position: relative;
        margin:0;
    }
    .feature{
        color:Darkgray;
        font-size:12px;
        float:left;
        margin-bottom:2rem;
        
    }
    .sub-title{
        padding:0;
        color:gray;
        
        
    }
    a{
        text-decoration:none;
        color:black;
        margin-top:10rem;
    }
    span p::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #000;
        transform: scaleX(0);
        transition: transform 0.3s ease;
      }
      span p:hover::before {
        transform: scaleX(1);
        cursor:pointer;
      }
      .more::before {  
        transform: scaleX(0);
        transform-origin: bottom right;
      }
      
      li{
  text-align: center;
cursor:pointer;
  position: relative;
  overflow: hidden;
  background: transparent;
  text-transform: uppercase;
  transition: all .35s;
}

li:before,
li:after{
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: -100%;
  left: 0;
  background: grey;
  z-index: -1;
  transition: all .35s;
}

li:before{
  opacity: .5;
}

li:after{
  transition-delay: .2s;
}

li:hover{
  color: #fff;
}

li:hover:before,
li:hover:after{
  top: 0;
}


     @keyframes  slideInFromLeft {
        0% {
          transform: translateX(-100%);
          background: hsl(200 100% 80%);

        }
        100% {
          transform: translateX(0);
        }
      }
      
      .home_content {  
        animation: 1s ease-out 0s 1 slideInFromLeft; 
             }
     
            
             
             .blob {
               position: absolute;
               top: 0;
               left: 0;
               fill:     #5FC8E8;
               
               width: 50vmax;
               z-index: -2;
               animation: move 10s ease-in-out infinite;
               transform-origin: 50% 50%;
             }
             
             @keyframes move {
               0%   { transform: scale(1)   translate(10px, -30px); }
               38%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
               40%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
               78%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
               80%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
               100% { transform: scale(1)   translate(10px, -30px); }
             }
             @media and (max-width: 850px) {
  
              .header_content{
                  display: flex;
                  flex-direction: row;
              }
              .header_container{
                  position: relative;
              }
            }
             @media screen and (max-width: 600px) {
              .thumb{
               width: 24rem;
               height: 8rem;
              }
              .thumb:hover {
               width:25rem;
               height:18rem;
               transform: scaleX(1.1);
               transform: scaleY(1.1);
           }
           

}

`