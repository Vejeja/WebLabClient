import React, { useEffect, useState } from 'react';
import api from '../api';
import Cookies from 'universal-cookie';
import Modal from '../modal';
import { useNavigate } from 'react-router-dom';

const cookies = new Cookies();

export default function Tickets() {

    const [listTickets, setListTickets] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (listTickets.length !== 0) return;
        api.get(
            '/api/tickets',
            {headers: {SESSID: cookies.get('SESSID')}}
            )
          .then(function (response) {
            setListTickets(response.data);
          })
          .catch(function(error){
            setModalVisible(true);
          });
        });

    return (
        <div className='main'>
            <div className='titles'>Мои билеты</div>
            <table>
                <thead>
                    <tr>
                        <th>Концерт</th>
                        <th>Тип билета</th>
                        <th>Дата</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listTickets.map((elem)=>
                        <tr key={elem.id}>
                        <th>{elem.concert_name}</th>
                        <th>{elem.ticket_name}</th>
                        <th>{elem.time}</th>
                        </tr>
                        )
                    }

                </tbody>
            </table>
            <Modal show={modalVisible}>
                <p>Для просмотра купленных билетов необходимо войти</p>
                <div>
                    <button className='con_button' onClick={()=>{navigate('/registration')}}>Логин</button>
                    <button className='con_button' onClick={()=>{navigate('/')}}>На домашнюю</button>
                </div>
            </Modal>
        </div>
    )
}