import Login from './React/Login'
import Layout from './React/Layout'
import Home from './React/Home'
import Info from './React/Info'
import Todos from './React/Todos'
import Posts from './React/Posts'
import Erorr from './React/Erorr'
import Comments from './React/Comments'
import Albums from './React/Albums'
import Photos from './React/Photos'


import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='login' element={<Login />} ></Route>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='info' element={<Info />} />
                    <Route path='todos' element={<Todos />} />
                    <Route path='albums' element={<Albums />} />
                    <Route path='albums/:photoId/photos' element={<Photos/>}/>
                    <Route path='posts' element={<Posts />} >
                    <Route path='posts/:commentId/comments' element={<Comments />} />
                    </Route>
                </Route>
                <Route path='*' element={<Erorr />} >
            </Route>
        </Routes>
        </BrowserRouter >
    )
}

export default App