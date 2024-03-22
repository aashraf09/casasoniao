import React from 'react'
import profileImg from '../assets/profile-img.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMessage } from '@fortawesome/free-regular-svg-icons'

const Post = (props) => {

    const { profileName, timePosted, postContent, image, isFollowing } = props;
    return (
        <div className="w-full post-text flex flex-col items-start justify-between gap-2">
            <div className="flex flex-row items-center justify-start gap-2">
                <img src={profileImg} alt="" />
                <div className="flex flex-col items-start justify-start gap-0">
                    <h3 className='bold-text'>{profileName} </h3>
                    <p className='text-sm'>{timePosted}</p>
                </div>
                {
                    isFollowing ? '' : (
                        <button className='bold-text px-4 ml-5 p-2 rounded-full bg-[#6A35FF] text-white'>Follow</button>
                    )
                }
            </div>
            <div className="flex border px-2 py-1 rounded-xl border-slate-400 flex-col items-start justify-between gap-2 w-full">
                <p className="bold-text">{postContent}</p>
                <img src={image} alt="" />
                <div className="flex text-xs flex-row items-center justify-between gap-4">
                    <div className="flex flex-row items-center jutify-between gap-1">
                        <button>
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                        <p>2.1K</p>
                    </div>
                    <p>.</p>
                    <div className="flex flex-row items-center jutify-between gap-1">
                        <button>
                            <FontAwesomeIcon icon={faMessage} />
                        </button>
                        <p>2.1K</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post