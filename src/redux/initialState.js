const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe'
    },
    {
      id: '2',
      title: 'Article nr 2',
      shortDescription: 'Description of the article',
      content: 'Main content of the article',
      publishedDate: new Date('04-05-2023'), 
      author: 'John Doe'
    },
    {
      id: '3',
      title: 'Article nr 3',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('05-06-2023'), 
    },
    {
      id: '4',
      title: 'Article nr 4',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-07-2023'), 
      author: 'John Doe'
    }
  ]
};

export default initialState;
