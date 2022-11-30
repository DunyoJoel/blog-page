import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Delete from "../img/delete.png";
import Edit from "../img/edit.png";

const Single = () => {
  return (
    <div className='single'>
        <div className='content'>
           
            <img src='https://img.freepik.com/free-psd/squares-cards-mockup_211682-285.jpg?size=626&ext=jpg&uid=R12279054&ga=GA1.2.1598920660.1651588790' alt=''/>
            <div className='user'>
                <img src='https://img.freepik.com/free-photo/happy-positive-young-women-show-peace-gesture-v-sign-exclaim-positively-dressed-casual-clothes-have-fun-pose-indoor-against-vivid-yellow-background-victory-symbol-body-language-concept_273609-61512.jpg?size=626&ext=jpg&uid=R12279054&ga=GA1.2.1598920660.1651588790&semt=sph' alt=''/>
                <div className='info'>
                    <span>Joe</span>
                    <p>Posted 3 days ago</p>
                </div>
                <div className='edit'>
                    <Link to={`/write/edit=2`}>
                    <img src={Edit} alt=""/>
                    </Link>
                    <img src={Delete} alt=""/>
                </div>
            </div>
            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
        </div>
        <div className='menu'>
            <Menu/>
        </div>
    </div>
  )
}

export default Single;