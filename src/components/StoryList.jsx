import StoryItem from "./StoryItem"

const StoryList = ({stories}) =>{

    const elementList = stories.map((story)=><StoryItem storyItem={story}/>)
    return(
        <>
            <ul>
                {elementList}
            </ul>
        </>
    )
}
export default StoryList