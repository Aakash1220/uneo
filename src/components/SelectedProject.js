import React from 'react'
import styled from 'styled-components';
const ContactUs = styled.div` 
position:absolute;
margin-top: 25rem;
z-index: 3;
.intro{
    width:43%;
    color:black;
    font-size:28px;
padding:3.5rem 0;    
}
.contact_container{
    display:flex;
    align-items:center;
    justify-content:center;
}
.vertical {
    border-left: 1px solid #aca7a7;
height: 350px;
position: absolute;
left: 50%;
}
.contact_btn{
    margin-left:50rem;
    background-color:  #5FC8E8;
    width:7rem;
    border-radius:10px 10px 10px 10px;
   cursor:pointer;
   color:white;
   transition:0.3s;
}
.contact_btn:hover{
    color:black;
    background-color:  #5FC8E8;
    width:8rem;
    border:1px solid black;
}
`;
const Projects = styled.div` 
margin-top:65rem;
z-index:4;
display:flex;
align-items:center;
flex-direction:column;
position:relative;
.project_header{
    width:43%;
    color:gray;
    font-size:22px;
padding:3.5rem 0; 
animation: Mobile--hover--3cyKA 3s ease-in-out infinite alternate;
}
.row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
  }
  
  .column {
    flex: 1%;
    max-width: 50%;
    padding: 0 4px;
  }
  
  .column img {
    margin-top: 8px;
    vertical-align: middle;
    width: 90%;
  }
  .project_thumb_title{
font-size:18px;
color:black;
margin-bottom:0;
  }
  .project_thumb_subtitle{
    font-size:16px;
    color:gray;
    margin-top:0;
      }
  
  
  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      flex: 100%;
      max-width: 100%;
   
  }
  }
  
`;
function SelectedProject() {
    return (
        <div>
            <ContactUs>

                <div className="contact_container">
                    <div className="intro">
                        <p>Ueno is a full-service agency, busy designing and building beautiful digital products, brands, and experiences</p>
                    </div>
                </div>
                <div className="vertical"></div>
                <p className='contact_btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                    Contact</p>

            </ContactUs>
            <Projects>

                <p className="project_header">All Work, all play Selected project</p>
                <div className="projects">
                    <div class="row">
                        <div className="column">
                           <span> <img src="https://ueno.co/static/6aaadd9ae00abb7450ff868e7cd1c1b3/e7405/02be3ae3-c281-47ca-b8f1-e8a29a5cf474_dorsia_casestudy_hero.webp" />
                           <p className='project_thumb_title'>hi there</p>
                           <p className='project_thumb_subtitle'>hi there</p>
                           </span>
                            <span><img src="https://ueno.co/static/5038419186136bcececcf44c09df777a/e7405/fa4cfb00-b4bc-497c-8691-b6187f3affce_lonelyplanet_hero.webp" />
                            <p className='project_thumb_title'>hi there</p>
                           <p className='project_thumb_subtitle'>hi there</p>
                            </span>
                            <span><img src="https://ueno.co/static/fb65a052c22192a5ab78fd2c84798325/e7405/798efde1-7b06-4d72-93fb-d98a45ea64e3_redbull.webp" />
                            <p className='project_thumb_title'>hi there</p>
                           <p className='project_thumb_subtitle'>hi there</p></span>
                           <span><img src="https://ueno.co/static/6de8d4d5c9c9553938c4b4aa1a589b98/e7405/53f3f30d-b24d-4da9-ad4d-96cdf8c6292b_dropdbox-guide.webp" />
                           <p className='project_thumb_title'>hi there</p>
                           <p className='project_thumb_subtitle'>hi there</p></span> 
                            <span><img src="https://ueno.co/static/72299ba88c8105be346665e058b42e0b/e7405/ca3d4561-c5b2-4e99-8147-f916251f451f_uber-thumb.webp" />
                             <p className='project_thumb_title'>hi there</p>
                           <p className='project_thumb_subtitle'>hi there</p></span>
                        </div>
                        <div className="column">
                            <span><img src="https://ueno.co/static/66e23e8d5a46f6cfd8bc28aaebe3b81f/e7405/90594130-e628-4097-a7a4-53c62a9ad61a_espn-thumb.webp" />
                             <p className='project_thumb_title'>hi there</p>
                           <p className='project_thumb_subtitle'>hi there</p></span>
                            <span><img src="https://ueno.co/static/4a8222b171e682312a7771e9e51ff1d7/e7405/668f801c-fad1-465e-a023-9b83348aa070_clearmotion-grid.webp" />
                             <p className='project_thumb_title'>hi there</p>
                           <p className='project_thumb_subtitle'>hi there</p></span>
                            <span><img src="https://ueno.co/static/2fa64aeba6c76d13d61a1f6e6c810286/e7405/6805d3d5-174a-4355-8265-a4446e971882_copper-image.webp" />
                             <p className='project_thumb_title'>hi there</p>
                           <p className='project_thumb_subtitle'>hi there</p></span>
                            <span><img src="https://ueno.co/static/da4eb8d9f3845cb563400f68d440d1bd/e7405/d3a97c0e-446e-49f7-aa2e-b0187a813c5f_santatracker.webp" />
                             <p className='project_thumb_title'>hi there</p>
                           <p className='project_thumb_subtitle'>hi there</p></span>
                            <span><img src="https://ueno.co/static/b6fbef506b1a46b67d12ccc60c076470/e7405/30a872c9-ec6d-4da8-a40e-cf597409cb05_Cowboy1200x1200.webp" />
                             <p className='project_thumb_title'>hi there</p>
                           <p className='project_thumb_subtitle'>hi there</p></span>
                        </div>
                    </div>
                </div>
            </Projects>
        </div>
    )
}

export default SelectedProject
