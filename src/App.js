import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import General from './pages/General'
import Profile from './pages/Profile'
import FVenegas from './pages/FVenegas'
import RentalDeEquipos from './pages/RentalDeEquipos'
import BolsaDeTrabajos from './pages/BolsaDeTrabajos'
import CreateNewTopic from './pages/CreateNewTopic'
import SideNav from './components/SideNav'
import promotionImg1 from './assets/promotion_img_1.svg'
import promotionImg2 from './assets/promotion_img_2.svg'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => {
  const [activePage, setActivePage] = useState('/')
  const handlePageChange = (path) => {
    setActivePage(path);
  };
  const routes = [
    {
      heading: 'Topics',
      links: [
        {
          name: 'General',
          path: '/',
          Component: () => <General activePage={activePage} onPageChange={handlePageChange} />,
          borderStyle: 'border-gradient-yellow-purple',
          backgroundStyle: 'background-gradient-yellow-purple',
        },
        {
          name: 'Rental de Equipos',
          path: '/rental-de-equipos',
          Component: () => <RentalDeEquipos activePage={activePage} onPageChange={handlePageChange} />,
          borderStyle: 'border-gradient-green-blue',
          backgroundStyle: 'background-gradient-green-blue',
        },
        {
          name: 'Bolsa de Trabajos',
          path: '/bolsa-de-trabajos',
          Component: () => <BolsaDeTrabajos activePage={activePage} onPageChange={handlePageChange} />,
          borderStyle: 'border-gradient-red-green',
          backgroundStyle: 'background-gradient-red-green',
        },
        {
          name: 'Create New Topic',
          path: '/new-topic',
          Component: () => <CreateNewTopic activePage={activePage} onPageChange={handlePageChange} />,
          borderStyle: 'border-disabled',
          backgroundStyle: 'background-disabled',
        }
      ],
    },
    {
      heading: 'Chats',
      links: [
        {
          name: 'FVenegas',
          path: '/fvenegas',
          Component: () => <FVenegas activePage={activePage} onPageChange={handlePageChange} />,
          borderStyle: 'border-gradient-green-yellow',
          backgroundStyle: 'background-gradient-green-yellow',
        },
        {
          name: 'ErosT',
          path: '/erost',
          Component: () => <Profile activePage={activePage} onPageChange={handlePageChange} />,
          borderStyle: 'border-gradient-blue-green',
          backgroundStyle: 'background-gradient-blue-green',
        },
        {
          name: 'Start New Chat',
          path: '/new-chat',
          Component: () => <Profile activePage={activePage} onPageChange={handlePageChange} />,
          borderStyle: 'border-disabled',
          backgroundStyle: 'background-disabled',
        }
      ],
    },
    {
      heading: '',
      links: [
        {
          name: 'Search',
          path: '/search',
          Component: () => <Profile activePage={activePage} onPageChange={handlePageChange} />,
          icon: faMagnifyingGlass,
          borderStyle: 'border-disabled',
          backgroundStyle: 'background-disabled',
        },
        {
          name: 'Notifications',
          path: '/notifications',
          Component: () => <Profile activePage={activePage} onPageChange={handlePageChange} />,
          icon: faBell,
          borderStyle: 'border-disabled',
          backgroundStyle: 'background-disabled',
        },
        {
          name: 'Profile',
          path: '/profile',
          Component: () => <Profile activePage={activePage} onPageChange={handlePageChange} />,
          icon: faUser,
          borderStyle: 'border-disabled',
          backgroundStyle: 'background-disabled',
        }
      ]
    }
  ]
  const toggleSideNav = () => {
    document.getElementById('sideNav').classList.toggle('hidden')
    document.getElementById('sideNav').classList.toggle('slide-right')
  }
  return (
    <Router>
      <main className="App flex flex-row items-start justify-between w-full py-5 px-3">
        <section id='sideNav' className='lg:basis-[20%] border-r-2 border-r-slate-500 pr-3 md:flex md:relative absolute bg-[#fff] left-3 top-5'>
          <SideNav routes={routes} activePage={activePage} onPageChange={handlePageChange} />
        </section>
        <button onClick={toggleSideNav} className='absolute top-5 right-5 md:hidden'><FontAwesomeIcon size='xl' icon={faBars} /></button>
        <section className="content grow box-border md:px-5">
          <Routes>
            {routes.map((route, index) => (
              route.links.map((link, index) => {
                return (
                  <Route
                    key={link.path}
                    path={link.path}
                    exact
                    element={<link.Component activePage={activePage} />}
                  ></Route>
                )
              })
            ))}
            <Route path='*' element={<Profile activePage={activePage} />}></Route>
          </Routes>
        </section>
        <section className="basis-[20%] border pl-3 border-l-2 border-l-slate-500 hidden md:flex flex-col items-center justify-start gap-4 min-h-screen">
          <img src={promotionImg1} alt="ad" />
          <img src={promotionImg2} alt="ad" />
        </section>
      </main>
    </Router>
  )
}

export default App