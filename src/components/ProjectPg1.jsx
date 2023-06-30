import React from 'react'
import styled from 'styled-components'
function ProjectPg1() {
    return (
        <div>
            <Container>
                <Box>
                    <Boximg>
                        <Image>
                        <img src="/images/tesla-clone.png" alt="/" />
                        </Image>
                    </Boximg>
                    <About>
                        <h4>Tesla-Clone</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis facilis dolorum ex dicta vel itaque delectus laudantium, corporis ipsa illum reiciendis consequatur quisquam voluptatum molestias necessitatibus et porro voluptates nemo placeat consectetur! Dignissimos.</p>
                    </About>
                </Box>
            </Container>
        </div>
    )
}

export default ProjectPg1

const Container = styled.div`
background:#fff;
margin:0 18%;
padding-bottom:35px;
`
const Box = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:60vh;
box-shadow:rgba(0,0,0,0.5) 0px 0px 10px 0px;
border-radius:25px;
`
const Boximg=styled.div`
${'' /* display:flex;
justify-content:center;
align-items:center; */}
${'' /* box-shadow:rgba(0,0,0,0.5) 0px 0px 10px 0px; */}
border-radius:25px;
padding-left:30px;
`


const Image = styled.div`
width:500px;
height:400px;
${'' /* background:white; */}

img{
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:top center;
    transition:all 10s ease-in-out;
    border-radius:25px;
}
img:hover{
        cursor:pointer;
        object-position:bottom center;
    }
`
const About = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:300px;
${'' /* padding:20px; */}
h4{
    margin-bottom:80px;
}
p{
    margin:20px
}
`