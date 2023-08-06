import React, {useState} from 'react';
import style from './Contact.module.css';

const Contact = ({contact}) => {

    const [socialMedia] = useState([
        {id: 1, title: 'GitHub', link: 'https://github.com/demchko', img: '/social/github.png'},
        {id: 2, title: 'Linkdin', link: 'https://www.linkedin.com/in/artem-demchko/', img: '/social/linkedin.png'},
        {id: 3, title: 'demchkoartem05@gmail.com', link: '', img: '/social/email.png'},
        {id: 4, title: '+380 (50) 8280 359', link: '', img: '/social/whatsapp.png'},
    ])

    return (
        <div className={style.contact} ref={contact} >
            <div className={style.info} >
                <h1>contact</h1>
                <p className={style.text} >Get in touch with me via social media, email or phone</p>
                <div className={style.block} >
                    {
                        socialMedia.map(item => (
                            <a href={item.link}  style={{display: 'flex', alignItems: 'center'}} >
                                <img src={item.img} />
                                <p>{item.title}</p>
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className={style.imgBlock} >
                <img src='/programmer.png' />
            </div>
        </div>
    );
};

export default Contact;