import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout'
import Accueil from './accueil'
import Menu from './menu'
import Nous from './sommes-nous'

export default function Home() {
  return (
    <Layout   page="SUFFRAGE">
      <Accueil />
      <Menu />
      <Nous />
    </Layout>
   
  )
}
