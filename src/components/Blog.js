import React from 'react'
import styled from 'styled-components';

const BlogContainer = styled.div`
width:100%;
margin-top:14rem;
.blog_news{
    padding: 0px 25px;
}
}
.blog_news,.blog_post_container,.blog_info{
    display:flex;
align-items:center;
justify-content:space-between;
}
.blog_post_container{
    flex-direction:column;  
}
.blog_post{
    width:50rem;
    height:10rem;
    margin-right:3rem;
}
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
hr{
    border:1px solid lightgray;
}
.blog_date{
font-size:11px;
color:gray;
cursor:pointer;

}
.blog_title{
font-size:24px;
width:50%;
cursor:pointer;
}
.read_blog{
    color:black;
    text-decoration:none;
}

`;
function Blog() {
    return (
        <div>
            <BlogContainer>
                <div className="blog_news">
                    <span >
                        <p className="header1">What’s new?</p>
                        <p className="header2">Our blog and news</p>
                    </span>
                    <div className="blog_post_container">
                        <div className="blog_post" id="blog1">
                            <span className="blog_info">
                                <p className="blog_date">Jan 06.Blog</p>
                                <p className="blog_title">24,895 hours later</p>
                                <a href="" className="read_blog">> ReadMore</a>
                            </span>
                            <hr></hr>
                        </div>
                        <div className="blog_post" id="blog2">
                        <span className="blog_info">
                                <p className="blog_date">Oct 19.News</p>
                                <p className="blog_title">Figma wanted our CEO's insights for some reason</p>
                                <a href="" className="read_blog">> ReadMore</a>
                            </span>
                            <hr></hr>
                        </div>
                        <div className="blog_post" id="blog3">
                        <span className="blog_info">
                                <p className="blog_date">Oct 12.News</p>
                                <p className="blog_title">This guy really won't shut up</p>
                                <a href="" className="read_blog">> ReadMore</a>
                            </span>
                            <hr></hr>
                        </div>
                    </div>
                </div>
                           </BlogContainer>   
        </div >
    )
}

export default Blog
