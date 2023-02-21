import React, { useEffect, useState } from 'react';
import { Layout } from './components/Layout';
import { useAppDispatch } from './store/hooks';
import { getUsersThunk } from './store/reducers/usersSlice';
import { Main } from './components/Main';
import { Header } from './components/Header';

function App() {
  const [isClicked, toggleIsClicked] = useState(false)
  const [isGetApi, setIsGetApi] = useState(false)  
  const dispatch = useAppDispatch()

  
  useEffect(() => {
    if (!isGetApi) {
      dispatch(getUsersThunk())    
      setIsGetApi(true)
    }
  }, [dispatch, isGetApi])

  return (
    <Layout>
     <Header
        isClicked={isClicked}
        toggleIsClicked={toggleIsClicked}
      />
      <Main isClicked={isClicked} /> 
    </Layout>
  );
}

export default App;
