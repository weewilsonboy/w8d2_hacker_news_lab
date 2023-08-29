import { useState, useEffect } from 'react'
import StoryList from './components/StoryList'
import { styled } from 'styled-components'



const StyledHeader = styled.header`
  background-color: #FF6600;
  padding:2px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight:bold;
  display:flex;
  gap:5px;
  align-items:center;
  margin-bottom:0px;
`;



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
    <StyledHeader>Search Stories: <input type='text' onChange={handleSearch}/></StyledHeader>
    

    {storyDetails && <StoryList stories={filteredStoriesList}/>}

    </>
  )
}

export default App