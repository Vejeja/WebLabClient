import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registration from '../Pages/Registration';

export default function Header(){
    return (
        
        <header>
            <div>
            <div className='logo'>
                Freedom
            </div>
            <div className='logo2'>Билеты на твой любимый концерт</div>
            </div>
            <ul className='menu'>
                <li><Link to = '/registration'>Вход/Регистрация</Link></li>
                <li><Link to = '/'>Все концерты</Link></li>
                <li><Link to = '/tickets'>Мои билеты</Link></li>
            </ul>
        </header>
    )
}
