import React, {useState, useCallback} from 'react';
import { StyledSearch } from './styled/Search.styled';

export default function Search({item, setItem, onSearch}) {

    const handleSearchChange = useCallback(e => {
        setItem(e.target.value);
    }, [setItem])


    return(
        <StyledSearch>
            <div className="form-group">
                <label>Search Item</label>
                <input type="text"
                    name='searchItem'
                    value={item}
                    onChange={handleSearchChange}
                />
                <button onClick={onSearch}><i className='ri-search-line'></i></button>
            </div>
        </StyledSearch>
    )
}