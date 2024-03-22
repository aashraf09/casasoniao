import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faFaceLaugh } from '@fortawesome/free-regular-svg-icons'
import sendIcon from '../assets/sendIcon.svg'

const FVenegas = ({ activePage }) => {

    const chat = [
        {
            sender: 'FVenegas',
            messages: [
                'Hey there, how is the project going?'
            ],
        },
        {
            sender: 'Me',
            messages: [
                'Hey!!',
                'Everything going good according to plan',
                'We just got a new FrontEnd Dev to help out withall of this mess'
            ],
        },
        {
            sender: 'FVenegas',
            messages: [
                'Thats good, hope we can make it all untill end of april',
                "Let's see how it all goes, See ya!!!"
            ]
        }
    ]
    return (
        <main className='flex flex-col min-h-screen items-center justify-start gap-5'>
            <h3 className="bold-text background-gradient-green-yellow">FVenegas</h3>
            <section className='w-full grow border flex flex-col items-center justify-start gap-4'>
                {
                    chat.map((chat) => {
                        if (chat.sender === 'FVenegas') {
                            return (
                                <div className="w-full flex flex-row items-center justify-start gap-2">
                                    <div className="flex w-[40%] flex-col items-start justify-start gap-0">
                                        {
                                            chat.messages.map((message, index) => {
                                                return (
                                                    <p key={index} className={`w-full text-sm border border-[#000000bf] text-[#000000bf] font-bold px-3 py-1 my-1 ${index === 0 ? 'rounded-[5px] rounded-t-[15px]' : index === chat.messages.length - 1 ? 'rounded-[5px] rounded-br-[15px]' : 'rounded-[5px]'}`}>{message}</p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        }
                        else if (chat.sender === 'Me') {
                            return (
                                <div className="w-full flex flex-row-reverse items-center justify-start gap-2">
                                    <div className="flex w-[40%] flex-col items-end justify-start gap-0">
                                        {
                                            chat.messages.map((message, index) => {
                                                return (
                                                    <p key={index} className={`text-sm bg-[#0070c2bf] text-white font-bold px-3 py-1 my-1 ${index === 0 ? 'rounded-[5px] rounded-t-[15px]' : index === chat.messages.length - 1 ? 'rounded-[5px] rounded-bl-[20px]' : 'rounded-[5px]'}`}>{message}</p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </section>
            <section className="flex flex-row items-center justify-between w-full gap-3 px-3 py-2 border border-[#000000bf] rounded-3xl">
                <label htmlFor="upload-img">
                    <FontAwesomeIcon icon={faImages}></FontAwesomeIcon>
                    <input name='upload-img' className='hidden' id='upload-img' type="image" src="" alt="" />
                </label>
                <label htmlFor="emojis"></label>

            </section>
        </main>
    )
}

export default FVenegas