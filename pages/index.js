import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HomeSection from '../Components/HomeSection/HomeSection'
import CarouselCompo from '@/Components/Carousel/Carousel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <CarouselCompo/>
     <HomeSection/>
    </>
  )
}
