import { useState, useEffect, useCallback } from 'react';

const LOCAL_STORAGE_KEY = 'savedTalks';

export const useSavedTalks = () => {
  const [savedCardIds, setSavedCardIds] = useState<number[]>([]);

  useEffect(() => {
    const storedIds = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedIds) {
      setSavedCardIds(JSON.parse(storedIds));
    }
  }, []);

  const toggleSaveCard = useCallback((cardId: number) => {
    setSavedCardIds((prevIds) => {
      const isSaved = prevIds.includes(cardId);
      const newIds = isSaved ? prevIds.filter((id) => id !== cardId) : [...prevIds, cardId];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newIds));
      return newIds;
    });
  }, []);

  return { savedCardIds, toggleSaveCard };
};