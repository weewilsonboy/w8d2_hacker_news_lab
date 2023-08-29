import { styled } from "styled-components"
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

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
    console.log(dayjs.unix(storyItem.time))
    return(<>
    <StoryLi key={storyItem.id}>
    <a href={storyItem.url}>{storyItem.title}</a>
    <BottomRow>
        <span>{storyItem.score} points</span>
        <span>by  {storyItem.by}</span>
        <span>{dayjs.unix(storyItem.time).fromNow()}</span>
        {storyItem.descendants ? <span>{storyItem.descendants} Comments</span> : <span>No Comments</span>}
    </BottomRow>
    </StoryLi>
    </>)
}
export default StoryItem