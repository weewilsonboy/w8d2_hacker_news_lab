import { styled } from "styled-components"

const StoryLi = styled.li`
    list-style: none;
    background-color: blanchedalmond;
    margin:3px;
    padding:1rem;
    display:flex;
    flex-direction:column;
    height:30px;
`;

const BottomRow = styled.div`
    display:flex;
    gap:1rem;
    padding:5px 0px 5px 0px;
`;


const StoryItem = ({storyItem}) =>{
    console.log(storyItem)

    return(<>
    <StoryLi key={storyItem.id}>
    <a href={storyItem.url}>{storyItem.title}</a>
    <BottomRow>
        <span>{storyItem.score} points</span>
        <span>by  {storyItem.by}</span>
        <span>{storyItem.time}</span>
        {storyItem.descendants ? <span>{storyItem.descendants} Comments</span> : <span>No Comments</span>}
    </BottomRow>
    </StoryLi>
    </>)
}
export default StoryItem