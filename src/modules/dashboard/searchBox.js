import React from 'react';

const Search = (props) => (
    <div>
        <span className="quote">“Type characters to enter into the planets information"</span>
        <input type="text" placeholder="Search" value={props.searchTxt} onChange={e => props.handleSearch(e)} />
    </div>
);

export default Search;