import api from '../api';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


export default function ConcertCard(prop){
    const buyTicket = (type) => {
        api.post(
            '/api/tickets/buy',
            {
              concert: prop.concert,
              ticket_type: type
            },
            {headers: {SESSID: cookies.get('SESSID')}}
            )
          .then(function (response) {
            prop.showBought();
          })
          .catch(function (error) {
            if (error.response.status === 401)
            {
              prop.showModal();
            }
          });
      }
      
      const style = {
        backgroundImage: `url("data:image/jpeg;base64,${prop.elem.image}")`
      }
    return (
        
    <div className='concert_block'  style = {style}>
        <div className='con_text'>{prop.elem.name}</div>
        <div className='con_text'>{prop.elem.band}</div>
        <div className='con_text'>{prop.elem.time}</div>
        <button type="button" className='con_button'>Описание</button>
        <div className='con_btns'>
            {
                prop.elem.tickets.map((ticket) => 
                <button key={ticket.type} type="button" className='con_button' onClick={(event) =>
                    {buyTicket(ticket.type)}}>{ticket.name}</button>)
            } 
        </div>
    </div>)
}