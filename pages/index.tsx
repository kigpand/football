import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  useEffect(() => {
    const options: any = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/players',
      params: {league: '39', season: '2020'},
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  return (
    <div className={styles.container}>
      테스트
    </div>
  )
}

export default Home
