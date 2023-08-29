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
      Promise.all(storyPromises).then(storyData=>{
        setStoryDetails(storyData)
        setFilteredStoriesList(storyData)
      })}
    
  )
  },[])
  const handleSearch = (event)=>{
    const searchValue = event.target.value
    const filteredStories = storyDetails.filter((story)=> {
      return findMatches(story, "title", searchValue) || findMatches(story, "by", searchValue)
    }
    )
    setFilteredStoriesList(filteredStories)
  }

  const findMatches = (story, key, value)=>{
    return story[key].toLowerCase().includes(value.toLowerCase())
  }

  return (
    <>
    <input type='text' onChange={handleSearch}/>

    {storyDetails && <StoryList stories={filteredStoriesList}/>}

    </>
  )
}

export default App