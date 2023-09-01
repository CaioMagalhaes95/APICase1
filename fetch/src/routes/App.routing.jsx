import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Main } from '../home'
import {Advice } from '../advice'
import { Form } from '../form'
import { Send } from '../send'


export function Routing(){
    return (
        <Router>
        <Routes>
        <Route path = "/send" element ={<Send />} />
        <Route path="/" element = {<Main />} />
        <Route path="/ad" element = {<Advice />} />
        <Route path="/form" element = {<Form />}/>
        </Routes>
        </Router>
    )
}