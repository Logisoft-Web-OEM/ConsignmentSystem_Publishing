import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Posts() {
  const [APIData, setAPIData] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((response: any) => {
        setAPIData(response.data);
      })
  }, [])
  
  const searchItems = (searchValue: any) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = APIData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    else{
      setFilteredResults(APIData)
    }
  }
  return (
    <div>
      <input type='search'
        placeholder='입력해주세요'
        onChange={(e) => searchItems(e.target.value)}
      />
      <div className='flex flex-col p-1'>
        {searchInput.length > 1 ? (
          filteredResults.map((item: any) => {
            return (
              <div className='flex flex-col mb-2 border w-60 p-2 items-center'>
                <span>{item.name}</span>
                <span>{item.email}</span>
              </div>
            )
          })
        ) : (
          APIData.map((item: any) => {
            return (
              <div className='flex flex-col mb-2 border w-60 p-2 items-center'>
                <span>{item.name}</span>
                <span>{item.email}</span>
              </div>
            )
          })
        )}
      </div>
    </div>
    )
}