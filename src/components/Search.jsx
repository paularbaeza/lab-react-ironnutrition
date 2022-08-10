import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {

    const {filterFunction} = props

    const [search, setSearch] = useState("")

    const handleSearch = (event) => {
        let searchValue = event.target.value
        setSearch(searchValue)
        console.log(search)
        filterFunction(searchValue)
    }


  return (
    <>
      <Divider>Search</Divider>

      <label htmlFor="search">Search</label>
      <Input value={search} type="text" name ="search" onChange={handleSearch}/>
    </>
  );
}

export default Search;
