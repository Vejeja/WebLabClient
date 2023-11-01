import React, { useState } from 'react';
import api from '../api';
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();


export default function Registration() {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMes, setErrorMes] = useState('');
  const navigate = useNavigate();

  const logIn = () => {
    api.post(
      '/api/auth/login', {
        login: login,
        password: password
      })
      .then(function (response) {
        const sessionId = response.data.SESSID;
        cookies.set('SESSID', sessionId);
        navigate('/');
      })
      .catch(function (error) {
        setErrorMes(error.response.data);
        console.log(error);
      });
  }
  
  const register = () => 
  {
    api.post(
      '/api/auth/register', {
        login: login,
        password: password
      })
      .then(function (response) {
        logIn();
      })
      .catch(function (error) {
        setErrorMes(error.response.data);
        console.log(error);
      });

  }
    return (
      <div className='bg'>
          <div className='regForm'>
            <div className='form'>
              <div className='text'>Логин</div>
              <input className='field' onChange={(event)=>{setLogin(event.target.value)}}></input>
            </div>
            <div className='form'>
              <div className='text'>Пароль</div>
              <input className='field' type='password' onChange={(event)=>{setPassword(event.target.value)}}></input>
            </div>
            <div className='errMes'>{errorMes}</div>
            <div className="buttons">
              <button type="button" id="butLog" onClick={logIn}>Вход</button>
              <button type="button" id="butReg" onClick={register}>Регистрация</button>
            </div>
          </div>
      </div>
    )
  }