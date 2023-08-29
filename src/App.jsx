import { useState, useEffect, Suspense } from 'react'
import StoryList from './components/StoryList'

function App() {

  const [storyDetails, setStoryDetails]=useState([])
  const [filteredStoriesList, setFilteredStoriesList] = useState([])

  useEffect(()=>{
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then(res=>res.json())
    .then(data=>{

      const storyPromises = data.slice(0,30).map(story=>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json`).then(res=>
          res.json()
        )
      )
      console.log(storyPromises)
      Promise.all(storyPromises).then(storyData=>setStoryDetails(storyData))}
    
  )
  },[])
  const handleSearch = (event)=>{
    const filteredStories = storyDetails.filter((story)=> {
      return story.title.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setFilteredStoriesList(filteredStories)
  }


  return (
    <>
    <input type='text' onChange={handleSearch}/>
    
    {storyDetails && <StoryList stories={filteredStoriesList}/>}

    </>
  )
}

export default App