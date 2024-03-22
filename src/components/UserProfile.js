import React from 'react'
import coverPhoto from '../assets/coverPhoto.svg'
import profileImg from '../assets/profile-img.svg'
import Post from './Post'
import parse from 'html-react-parser';
import soundCloudImg from '../assets/soundCloud.svg'

const UserProfile = () => {
    return (
        <main className='w-full flex flex-col items-center justify-between gap-3'>
            <section className="w-full border px-5 pb-3 pt-8 user-profile-section flex flex-col items-start justify-between">
                <img src={profileImg} alt="profile photo" className='w-[100px] h-[100px] rounded-full border-4 border-white' />
                <h2 className='bold-text'>Eros Talevi</h2>
                <p className='text-sm font-bold'>@erost</p>
                <div className="flex flex-row items-center justify-between gap-4">
                    <div className="flex flex-row items-center justify-start gap-2">
                        <p className='text-sm font-bold'>2.1K</p>
                        <p>Followers</p>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-2">
                        <p className='text-sm font-bold'>2.1K</p>
                        <p>Following</p>
                    </div>
                </div>
            </section>
            <section className="buttons flex flex-row items-center justify-between gap-5">
                <button className='font-bold text-sm'>Posts</button>
                <button>.</button>
                <button className='text-sm'>Likes</button>
            </section>
            <section className='w-full flex flex-col items-start justify-between gap-8'>
                <Post profileName={'Eros T'} timePosted={'15 minutes ago'} postContent={parse('<p>Escuchen este Set que acabo de subir a </br> SoundCloud: <a className="link-text" href="/"> soundcloud.com </a> </p>')} image={soundCloudImg} isFollowing={true} />
                <Post profileName={'Eros T'} timePosted={'15 minutes ago'} postContent={parse('<p>Que te parece ese diseño?? <a href="/" className="link-text">@fvenegas</a></p>')} isFollowing={true} />
            </section>
        </main>
    )
}

export default UserProfile