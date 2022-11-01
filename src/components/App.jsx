import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import * as API from './services/api';
import { AppWrapp } from './App.styled';
import ButtonLoadMore from './ButtonLoadMore/ButtonLoadMore';
import Loader from './Loader/Loader';

export function App() {
  const [searchImages, setSearchImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  async function appOnSubmit(searchQuery) {
    setPage(1);

    try {
      setIsLoading(true);
      const images = await API.getImages(searchQuery, 1);

      if (images.hits.length === 0) {
        setError(true);
      } else {
        setError(false);
      }

      if (images.total) {
        setSearchImages(images.hits);
        setSearchQuery(searchQuery);
        setTotalHits(images.total);
      }
    } finally {
      setIsLoading(false);
    }
  }

  function loadMore() {
    setPage(state => state + 1);
  }

  //викликається при натисканні на завантажити ще кнопку
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const images = await API.getImages(searchQuery, page);
        setSearchImages(state => [...state, ...images.hits]);
      } finally {
        setIsLoading(false);
      }
    }

    if (page > 1) {
      fetchData();
    }
  }, [page, searchQuery]);

  const isLoadMoreShown = () => {
    return (
      searchImages.length > 0 && searchImages.length !== totalHits && !isLoading
    );
  };

  return (
    <AppWrapp>
      <Searchbar onSubmitt={appOnSubmit} searchQuery={searchQuery} />

      <ImageGallery searchImages={searchImages} error={error} />

      <ButtonLoadMore onClick={loadMore} isShown={isLoadMoreShown()} />
      <Loader isLoading={isLoading} />
    </AppWrapp>
  );
}
