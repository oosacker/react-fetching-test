import React, {useState, useEffect} from 'react';

function App() {
  const [dataLoaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res =>
        res.json()
      )
      .then(result=>{
        console.log(result);
        setPosts(result);
        setLoaded(true);

      })
      .catch(err => {
        alert(err)
      })
  }, []);

  if(!dataLoaded){
    return (
      <div>
        <h3>Wait...</h3>
      </div>
    )
  }
  else{
    return (
      <>
        {posts.map(post => (
          <div className={'post'} key={post.id}>
            <h3>Title: {post['title']}</h3>
            <p>UserID: {post['userId']}</p>
          </div>
        ))}

      </>
    );
  }
}

export default App;