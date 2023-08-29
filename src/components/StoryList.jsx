import StoryItem from "./StoryItem"
import { styled } from "styled-components"

const StyledOl = styled.ol`
    list-style: none;
    padding-left: 0;
    margin-top:0;
`;


const StoryList = ({stories}) =>{

    const elementList = stories.map((story)=><StoryItem storyItem={story}/>)
    return(
        <>
            <StyledOl>
                {elementList}
            </StyledOl>
        </>
    )
}
export default StoryList