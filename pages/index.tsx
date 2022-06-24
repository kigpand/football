import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from '../styles/Home.module.scss'
import { useScript } from '../components/utils/hooks';

const Home: NextPage = () => {

  // const status = useScript('src') // 해당 부분에 player 목록 불러오는 script 실행하면 될듯???

  // useEffect(() => {
  //   const options: any = {
  //     method: 'GET',
  //     url: 'https://api-football-v1.p.rapidapi.com/v3/players',
  //     params: {league: '39', season: '2020'},
  //     headers: {
  //       'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
  //       'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST
  //     }
  //   };
    
  //   axios.request(options).then(function (response) {
  //     console.log(response.data);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }, []);

  return (
    <div className={styles.container}>
      원하는 조회 목록을 선택해주세요
      <Link href='/LeaguePage'>리그</Link>
      <Link href='/PlayerPage'>플레이어</Link>
    </div>
  )
}

export default Home
