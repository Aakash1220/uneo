import React from 'react';
import styled from 'styled-components';

const SideNav = styled.div`
  display: flex;
  flex-flow: row nowrap;
 
  flex-flow: column nowrap;
  background-color: #f9f9f9;
  position: fixed;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  z-index:15;
  .nav_list2 .nav_content {
    color: black;
    padding: 18px 10px;
    list-style: none;

  } 
`;
const UL = styled.ul`
display:flex;
.nav_list2{
  
}
.nav_extra {
  display:flex;
margin-left:auto;
margin-right:10rem;
}
.nav_extra_content{
list-style:none;
padding: 10px 7px;
}
h4{
  color:#777;
}

transition: 1s ease-in-out;
}

ul{}


`;


const RightNav = ({ open }) => {
  return (
    <SideNav open={open}>
      <div className="header_container">
        <a href="" className="logo">
          <svg className="logosvg" width="79" height="18" viewBox="0 0 79 18" role="img"><title>Ueno</title><path d="M232.29,89.534H227.6V72.463h4.688v2.788A6.009,6.009,0,0,1,237.916,72c4.61,0,6.29,3.1,6.29,6.891V89.534h-4.688V79.818c0-2.631-1.055-4.142-3.36-4.142-2.383,0-3.868,1.857-3.868,4.722v9.136ZM255,90a9,9,0,1,1,9.1-8.98C264.1,86.323,260.35,90,255,90Zm0-3.523c2.891,0,4.376-2.244,4.376-5.457,0-3.254-1.485-5.5-4.376-5.5-2.852,0-4.336,2.244-4.336,5.5C250.662,84.232,252.146,86.476,255,86.476ZM201.916,72.463H206.6V89.534h-4.688V86.746A6.009,6.009,0,0,1,196.29,90c-4.61,0-6.29-3.1-6.29-6.89V72.463h4.688V82.18c0,2.631,1.055,4.142,3.36,4.142,2.383,0,3.868-1.859,3.868-4.724V72.463Zm19.523,12.216a4.136,4.136,0,0,1-3.808,1.8,4.541,4.541,0,0,1-4.689-4.3h12.932V80.515c0-4.645-2.891-8.516-8.517-8.516a8.87,8.87,0,0,0-9.025,9.251c0,5.38,3.829,8.748,9.142,8.748,3.37,0,5.9-1.309,7.3-3.615Zm-4.121-9.274a3.865,3.865,0,0,1,3.985,3.869H213.02C213.45,77.148,214.74,75.406,217.318,75.406Zm49.328,14.5h0a2.343,2.343,0,0,1-2.354-2.331v-0.1a2.343,2.343,0,0,1,2.354-2.332h0A2.343,2.343,0,0,1,269,87.477v0.1A2.343,2.343,0,0,1,266.646,89.907Z" transform="translate(-190 -72)"></path></svg>
        </a>
      </div>
      <UL className="nav_list2">
        <ul>
          <li className="nav_content" id="item1">SERVICES</li>
          <li className="nav_content" id="item2">CLIENTS</li>
          <li className="nav_content" id="item3">CAREERS</li>
          <li className="nav_content" id="item4">ABOUT</li>
          <li className="nav_content" id="item5">CONTACT</li>




        </ul>

        <div className='nav_extra'>
          <ul>
            <h4>Experiments</h4>

            <li className="nav_extra_content" id="item1">Bueno
            
            </li>
            <li className="nav_extra_content" id="item2">    Ueno.design
            </li>
            <li className="nav_extra_content" id="item3">    Ueno.store
            </li>
            <li className="nav_extra_content" id="item4"> Ueno.events
            </li>
            <li className="nav_extra_content" id="item5">Ueno.land</li>
          </ul>
          <ul>
            <h4>Misc</h4>

            <li className="nav_extra_content" id="item1">    Newsletter
            </li>
            <li className="nav_extra_content" id="item2">Blog</li>
            <li className="nav_extra_content" id="item3">Playground</li>
            <li className="nav_extra_content" id="item4">The Interview</li>
            <li className="nav_extra_content" id="item5"> Press</li>
            <li className="nav_extra_content" id="item5"> Privacy</li>








          </ul>
          <ul>
            <h4>Social</h4>

            <li className="nav_extra_content" id="item1">Twitter</li>
            <li className="nav_extra_content" id="item2">Instagram</li>
            <li className="nav_extra_content" id="item3">Dribbble</li>
            <li className="nav_extra_content" id="item4">Github</li>
            <li className="nav_extra_content" id="item5">Linkedin</li>
            <li className="nav_extra_content" id="item5">Facebook</li>









          </ul>
          <ul>
            <h4>Directions</h4>

            <li className="nav_extra_content" id="item1">San Francisco</li>
            <li className="nav_extra_content" id="item2">New York</li>
            <li className="nav_extra_content" id="item3">Los Angeles</li>
            <li className="nav_extra_content" id="item4">Reykjavík</li>

          </ul>
        </div>
      </UL>







    </SideNav>
  )
}

export default RightNav