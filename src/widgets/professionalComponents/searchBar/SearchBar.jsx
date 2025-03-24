import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './searchBar.scss';

export const SearchBar = ({ onSearch }) => {

    return (
        <div className="search-wrapper">
            <form onSubmit={handleSubmit} className="search-container">
                <input
                    className="search-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="поиск"
                />
                <button type="submit" className="search-button">
                    <Search size={20} />
                </button>
            </form>
        </div>
    );
}
