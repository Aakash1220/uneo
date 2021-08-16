import React from 'react'
import styled from 'styled-components';

const FooterContainer = styled.div`
display:flex;
.header1,.header2{

    font-family: "IBM Plex Serif",Big Caslon,serif;
    font-weight: 100;
    letter-spacing: -.025em;
    color: #000;
    line-height: 1.10526;
font-size:3rem;
margin:0;
}
.header2{
 color:gray;  
}
.nav_extra {
    display:flex;
  margin-left:auto;
  margin-right:10rem;
  }
  .nav_extra_content{
  list-style:none;
  padding: 10px 0px;
  }
 

  
`;
const Social = styled.div`
display:flex;
margin-top:2rem;
justify-content:space-between;
ul{
    display:flex;
  
li{
    margin-right:2rem;
}

}

`;

function Footer() {
    return (
        <div>
            <FooterContainer>
<div className="footer_header">
<p className="header1">Got a Project?</p>
                        <p className="header2">Lets Talk</p>
</div>
<div className='nav_extra'>
          <ul>

            <li className="nav_extra_content" id="item1">Clients
            
            </li>
            <li className="nav_extra_content" id="item2">    About
            </li>
            <li className="nav_extra_content" id="item3">    Carrears
            </li>
            <li className="nav_extra_content" id="item4"> Contact
            </li>
            <li className="nav_extra_content" id="item5">News</li>
          </ul>
          <ul>

            <li className="nav_extra_content" id="item1">    New york
            </li>
            <li className="nav_extra_content" id="item2">San Fransico</li>
            <li className="nav_extra_content" id="item3">Playground</li>
            <li className="nav_extra_content" id="item4">Los Angeles</li>
           
</ul>
          <ul>

            <li className="nav_extra_content" id="item1">News letter</li>
            <li className="nav_extra_content" id="item2">Blog</li>
            <li className="nav_extra_content" id="item3">Bueno.co</li>
            <li className="nav_extra_content" id="item4">uneo.design</li>
            <li className="nav_extra_content" id="item5">uneo.store</li>
            <li className="nav_extra_content" id="item5">uneo.land</li>
            <li className="nav_extra_content" id="item5">uneo.events</li>
            <li className="nav_extra_content" id="item5">PlayGround</li>
            <li className="nav_extra_content" id="item5">Interview</li>



     </ul>
        
        </div>
            </FooterContainer>
            <hr />
            <Social>
            <a href="" className="logo">
          <svg className="logosvg" width="79" height="18" viewBox="0 0 79 18" role="img"><title>Ueno</title><path d="M232.29,89.534H227.6V72.463h4.688v2.788A6.009,6.009,0,0,1,237.916,72c4.61,0,6.29,3.1,6.29,6.891V89.534h-4.688V79.818c0-2.631-1.055-4.142-3.36-4.142-2.383,0-3.868,1.857-3.868,4.722v9.136ZM255,90a9,9,0,1,1,9.1-8.98C264.1,86.323,260.35,90,255,90Zm0-3.523c2.891,0,4.376-2.244,4.376-5.457,0-3.254-1.485-5.5-4.376-5.5-2.852,0-4.336,2.244-4.336,5.5C250.662,84.232,252.146,86.476,255,86.476ZM201.916,72.463H206.6V89.534h-4.688V86.746A6.009,6.009,0,0,1,196.29,90c-4.61,0-6.29-3.1-6.29-6.89V72.463h4.688V82.18c0,2.631,1.055,4.142,3.36,4.142,2.383,0,3.868-1.859,3.868-4.724V72.463Zm19.523,12.216a4.136,4.136,0,0,1-3.808,1.8,4.541,4.541,0,0,1-4.689-4.3h12.932V80.515c0-4.645-2.891-8.516-8.517-8.516a8.87,8.87,0,0,0-9.025,9.251c0,5.38,3.829,8.748,9.142,8.748,3.37,0,5.9-1.309,7.3-3.615Zm-4.121-9.274a3.865,3.865,0,0,1,3.985,3.869H213.02C213.45,77.148,214.74,75.406,217.318,75.406Zm49.328,14.5h0a2.343,2.343,0,0,1-2.354-2.331v-0.1a2.343,2.343,0,0,1,2.354-2.332h0A2.343,2.343,0,0,1,269,87.477v0.1A2.343,2.343,0,0,1,266.646,89.907Z" transform="translate(-190 -72)"></path></svg>
        </a>
        <ul className="social">
            <li><svg width="19" height="18" viewBox="0 0 19 18"><path fill="currentColor" d="M13.1 14.8c-.4-1.8-.8-3.3-1.3-4.7l1.5-.1c.8 0 1.7 0 2.7.3a7 7 0 01-2.9 4.5zm-4 1.2A7 7 0 015 14.6a10.2 10.2 0 015.3-4.2c.5 1.5 1 3.2 1.3 5.2-.7.3-1.6.4-2.5.4zm-7-7v-.1H3c1.4 0 3.9-.1 6.4-.9l.4 1a11.3 11.3 0 00-6 4.5A7 7 0 012.2 9zm4-6.3c.4.6 1.4 1.9 2.4 3.8a20 20 0 01-5.5.8h-.7A7 7 0 016 2.7zM9 2a7 7 0 014.4 1.5A9.2 9.2 0 0110.1 6C9 4.2 8.2 3 7.6 2L9.1 2zm5.6 2.7a7 7 0 011.5 4l-3-.3-2 .1-.4-1a11 11 0 003.9-2.8zM9 0a9 9 0 100 18 9 9 0 000-18z"></path></svg></li>
            <li><svg width="20" height="15" viewBox="0 0 20 15"><path fill="currentColor" fill-rule="evenodd" d="M13.3 0c-2.2 0-4 1.7-4 3.8l.1.8C6.1 4.5 3.2 3 1.3.6c-.4.7-.6 1.3-.6 2 0 1.3.7 2.5 1.8 3.1a4 4 0 01-1.8-.4C.7 7.2 2.1 8.7 3.9 9a4.2 4.2 0 01-1.8.1 4 4 0 003.7 2.6 8.2 8.2 0 01-5.9 1.6c1.8 1 3.9 1.7 6 1.7A11 11 0 0017.3 3.7c.8-.5 1.5-1.2 2-2-.7.4-1.5.6-2.3.7.9-.5 1.5-1.2 1.8-2.1-.8.4-1.6.7-2.5.9a4 4 0 00-3-1.2"></path></svg></li>
            <li><svg width="18" height="17" viewBox="0 0 18 17"><path fill="currentColor" d="M8.7 0A8.7 8.7 0 006 17c.4 0 .5-.2.5-.4V15c-2.4.5-2.9-1.2-2.9-1.2-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9 0 1.3 1 1.3 1 .8 1.2 2 .8 2.6.6 0-.5.3-1 .5-1.1-2-.3-4-1-4-4.3 0-1 .4-1.8 1-2.4-.1-.2-.4-1.1 0-2.3 0 0 .8-.2 2.4.9a8.2 8.2 0 014.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1 0 2.3.6.6 1 1.4 1 2.4 0 3.3-2 4-4 4.3.3.2.6.8.6 1.6v2.4c0 .2.1.5.6.4A8.7 8.7 0 008.7 0z"></path></svg></li>
            <li><svg viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="nonzero" d="M5.2 0h7.6C15.7 0 18 2.3 18 5.2v7.6c0 2.9-2.3 5.2-5.2 5.2H5.2A5.2 5.2 0 010 12.8V5.2C0 2.3 2.3 0 5.2 0zM5 1.8A3.2 3.2 0 001.8 5v8c0 1.8 1.4 3.2 3.2 3.2h8c1.7 0 3.2-1.5 3.2-3.2V5c0-1.8-1.4-3.2-3.2-3.2H5zm8.7 1.3a1.1 1.1 0 110 2.3 1.1 1.1 0 010-2.3zM9 4.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.8a2.7 2.7 0 100 5.4 2.7 2.7 0 000-5.4z"></path></svg></li>
            <li><svg width="9" height="18" viewBox="0 0 9 18"><path fill="currentColor" d="M9 0v3.6H7.2c-.6 0-.9.7-.9 1.4v2.2H9v3.6H6.3V18H2.7v-7.2H0V7.2h2.7V3.6c0-2 1.6-3.6 3.6-3.6H9z"></path></svg></li>
   
        </ul>
            </Social>
        </div>
    )
}

export default Footer
