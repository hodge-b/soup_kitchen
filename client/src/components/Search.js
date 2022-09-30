import React from 'react';
import { StyledSearch } from './styled/Search.styled';

export default function Search(){

    return(
        <StyledSearch>
            <div className="form-group">
                <input className="search-input"
                    type="text"
                    name="search"
                    placeholder="search"
                />
            </div>
        </StyledSearch>
    )
}