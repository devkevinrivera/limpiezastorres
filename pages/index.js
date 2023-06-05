import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import TwoColumnSection from '@/components/MainBanner';
import LandingTwo from '@/components/LandingTwo';
import LandingFour from '@/components/LandingFour';
import LandingFive from '@/components/LandingFive';
import ReviewSection from '@/components/LandingComment';
import ContactSection from '@/components/ContactSection';
import HeaderOwn from '@/components/Header';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>SERVICIOS DE LIMPIEZA TORRES</title>
        <meta name="description" content="Mantén tu espacio impecable y reluciente con nuestra empresa de limpieza profesional! Ofrecemos servicios confiables y personalizados para satisfacer todas tus necesidades de limpieza. Nuestro equipo altamente capacitado utiliza los mejores productos y técnicas para garantizar resultados excepcionales" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeaderOwn />
        <TwoColumnSection />
        <LandingTwo />
        <LandingFour />
        <LandingFive />
        <ReviewSection />
        <ContactSection />
      </main>
      <FloatingWhatsApp
            accountName="Servicio al cliente"
            statusMessage="Solemos responder rapido"
            placeholder="Escribe tu consulta"
            chatMessage="¿En que podemos ayudarte?"
            phoneNumber="34633140422" />
    </>
  )
}
