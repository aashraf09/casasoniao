import React from 'react'
import parse from 'html-react-parser';
import profileImg from '../assets/profile-img.svg'
import soundCloudImg from '../assets/soundCloud.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMessage } from '@fortawesome/free-regular-svg-icons'
import Post from '../components/Post';

const General = ({ activePage }) => {
  return (
    <main className='flex flex-col items-center justify-between gap-5'>
      <h3 className="bold-text background-gradient-yellow-purple">General</h3>
      <section className='w-full flex flex-col items-center justify-between gap-8'>
        <Post profileName={'Eros T'} timePosted={'15 minutes ago'} postContent={parse('<p>Escuchen este Set que acabo de subir a </br> SoundCloud: <a className="link-text" href="/"> soundcloud.com </a> </p>')} image={soundCloudImg} isFollowing={true} />
        <Post profileName={'Felipe Venegas'} timePosted={'15 minutes ago'} postContent={parse('<p>Esta re chida la comunidad Cofradia 3.0 </br> <p className="link-text">#sonidiano </p><p>')} isFollowing={false} />
        <Post profileName={'Eros T'} timePosted={'15 minutes ago'} postContent={parse('<p>Que te parece ese diseño?? <a href="/" className="link-text">@fvenegas</a></p>')} isFollowing={true} />
      </section>
    </main>
  )
}

export default General