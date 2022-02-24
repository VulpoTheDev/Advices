/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true)
  const [advice, setAdvice] = useState("Whispers in your ear... go jump off a bridge.")
  let [counter, setCounter] = useState(0)
  useEffect(() => {
    const advice = fetch("https://api.adviceslip.com/advice");
    advice.then(res => res.json()).then(res => {
      setAdvice(res.slip.advice)
      setLoading(false)
    })
  }, [counter])
  return (
    <div className="container">
      <h1>Vulpo{"'"}s Advice</h1>
      <img src="/images/vulpo.png" alt="Wise Vulpo" />
      <p>I{"'"}m not responsible if vulpo tells you to jump off the bridge</p>
      <h2>
        Vulpo tells you {'"'}
        {advice}
        {'"'}
      </h2>
      <button onClick={() => setCounter(counter++)}>Another One!</button>
    </div>
  );
}

export default Home
