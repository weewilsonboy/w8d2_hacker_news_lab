import { styled } from "styled-components"
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import './test.css'

dayjs.extend(relativeTime)

const StoryLi = styled.li`
    list-style: none;
    background-color: #F6F6EF;
    padding:10px;
    display:flex;
    flex-direction:column;
    height:20px;
    font-family:Verdana, Geneva, sans-serif;
    font-size:10pt;
`;

const BottomRow = styled.div`
    display:flex;
    gap:1rem;
`;

const StyledA = styled.a`
    :visited{
        color:#828282;
    }

`;


const StoryItem = ({storyItem}) =>{
    console.log(storyItem)
    console.log(dayjs.unix(storyItem.time))
    return(<>
    <StoryLi key={storyItem.id}>
    <StyledA className="styledA" href={storyItem.url}>{storyItem.title}</StyledA>
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