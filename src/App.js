import React from 'react';
import './style.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Content from './components/Content/Content';
import Download from './components/Downloads/Download';
import Top from './components/Top/Top';
import Footer from './components/Footer/Footer';
import Diary from './components/Diary/Diary';

export default function App() {
  return (
    <>
      <Top />
      <Diary />
      <Header />
      <Profile />
      <Download />
      <Content />
      <Footer />
    </>
  );
}
