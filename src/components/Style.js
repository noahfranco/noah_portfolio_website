import Styled from "styled-components"; 

export const Img =  Styled.img`
    width: 40%;
    height: auto;
    border-radius: 50%;
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center
    box-shadow: 8px 8px 5px rgba(2, 3, 1, 0.5);
  `

export const Hover = Styled.div`
display: flex; 
justify-content: center; 
&:hover ${Img} {
    transform: translate(20px, 20px) rotate(20deg);
}
`
export const ReplaceHover = Styled.div`
display: flex; 
justify-content: center; 
`


export const Title =  Styled.h1`
    font-size: 5rem; 
    color: white; 
    text-shadow: 1px 1px 2px #4d4d4d, 0 0 20px #4d4d4d;
`
export const SubTitle =  Styled.h2`
    font-size: 2rem; 
    color: white;
    display: flex;  
`

// export const Button = Styled.div`
//     background-color: #4CAF50; /* Green */
//     border: none;
//     color: white;
//     padding: 15px 32px;
//     text-align: center;
//     text-decoration: none;
//     display: inline-block;
//     font-size: 16px;
// `


export const Background = Styled.img`
    height: 100vh; 
    background-image: url(BackgroundPhoto)
    background-position: center;
`

export const TopContent = Styled.div`
    display: flex; 
    height: 100vh; 
    flex-direction: column; 
    justify-content: center;
    align-items: center;  
    margin-top: -100vh 
`
// Projects component 

export const ProjectImg = Styled.img`
    height: 500px; 
    width: auto; 
    
`

export const Spacing = Styled.div`
    // margin: 30px; 
`

export const CardTitle = Styled.h1`
    font-size: 25px;
`

export const TextSize =  Styled.div`
    font-size: 15px; 
    padding: 15px; 
`
export const ParWrap = Styled.div`
    width: 100%;
    height: auto;

`

// export const SubWrap = Styled.div`
//     display: flex; 
//     justify-content: space-around; 
// `

// Individual Projects below 
export const Diabetes = Styled.div`
   
    
`
export const Planful = Styled.div`


`
export const RVbnb = Styled.div`


`
// Individual Projects above  

export const FrontEndTitle = Styled.h1`
font-size: 5rem; 
color: #000000; 
display: flex; 
justify-content: center; 
`
export const DiabetesBody = Styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: center;
`