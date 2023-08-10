const COMMENTS_KEY = 'comments';

export const getComments = () => JSON.parse(localStorage.getItem(COMMENTS_KEY)) || [];

export const setComments = (comment) => localStorage
  .setItem(COMMENTS_KEY, JSON.stringify(comment));
