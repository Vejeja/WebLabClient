import React, { useEffect, useState } from 'react';
import api from '../api';
import ConcertCard from '../Components/ConcertCard';
import Modal from '../modal';
import { useNavigate } from 'react-router-dom';
import Paginator from '../Components/Paginator';

export default function Concerts() {

    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [boughtModalVis, setBoughtModalVis] = useState(false);

    const showLoginModal = () => {
        setLoginModalVisible(true);
    }
    const hideLoginModal = () => {
        setLoginModalVisible(false);
    }
    const showBoughtModal = () => {
        setBoughtModalVis(true);
    }

    const navigate = useNavigate();

    const [concertsData, setConcertsData] = useState([]);
    useEffect(() => {
        if (concertsData.length !== 0) return;
        api.get('/api/concerts')
            .then(function (response) 
            {
            setConcertsData(response.data);
            })}
    );
    return (
        <div className='main'>
            <div className='titles'>Ближайшие концерты</div>
            <Paginator>
                {
                    concertsData.map((elem) => 
                    <ConcertCard key={elem.id}
                        concert={elem.id}
                        elem={elem}
                        showModal={showLoginModal}
                        showBought={showBoughtModal}/>
                    )
                }
            </Paginator>
            <Modal show={loginModalVisible}>
                <p>Для покупки билета необходимо войти</p>
                <div>
                    <button className='con_button' onClick={() => {navigate('registration')}}>
                        Логин
                    </button>
                    <button className='con_button' onClick={hideLoginModal}>
                        Отмена
                    </button>
                </div>
            </Modal>
            <Modal show={boughtModalVis}>
                <p>Билет куплен!</p>
                <button className='con_button' onClick={()=>{setBoughtModalVis(false)}}>
                    Отлично!
                </button>
            </Modal>
        </div>
    )
}