import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {

  const [input, setInput] = useState();
  
  const classFilters = {
    1: {
      imagePath: '1st.png',
      title: 'Waxing Crescent',
      description: 'Embrace new beginnings and set intentions under the waxing crescent moon, fostering hope and renewal.'
    },
    2: {
      imagePath: '2nd.png',
      title: 'First Quarter',
      description: 'As the first quarter moon illuminates the night sky, channel its energy to overcome challenges and find balance.'
    },
    4: {
      imagePath: '3rd.png',
      title: 'Waxing Gibbous',
      description: 'Harness the heightened emotions brought by the waxing gibbous moon to amplify creativity and passion in your endeavors.'
    },
    8: {
      imagePath: '4th_full.png',
      title: 'Full Moon',
      description: 'The full moon\'s radiant glow intensifies emotions, providing clarity and a powerful opportunity for self-reflection.'
    },
    16: {
      imagePath: '5th.png',
      title: 'Waning Gibbous',
      description: 'Release negativity during the waning gibbous moon, allowing emotional healing and a sense of calm to wash over you.'
    },
    32: {
      imagePath: '6th.png',
      title: 'Last Quarter',
      description: 'Under the last quarter moon, focus on shedding emotional baggage and embracing positive change for personal growth.'
    },
    64: {
      imagePath: '7th.png',
      title: 'Waning Crescent',
      description: 'Experience a sense of renewal and spiritual clarity during the waning crescent moon, letting go of emotional burdens.'
    }
  };

  const getClassStyle = flagValue => (input & flagValue) > 0 ? { 
    transform: 'scale(1.1)',
    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
  } : null;
 
  const classFiltersEntries = Object.entries(classFilters);

  return (
    <>
      <Head>
        <title>MoonLit Phases</title>
        <meta name="description" content="Moon Phases" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon1.svg" />
      </Head>

      <Header />
      <main className={styles.main}>

        <div className={styles.pageTitle}>
          <h2>MoonLit Phases</h2>
          <p>Type in a number and let the moon phase guide you.</p>
        </div>

        <input className={styles.inputBox}
          id="input"
          type="text"
          placeholder="Choose your phase..."
          value={input}
          autoComplete="off"
          onChange={event => setInput(event.target.value)} 
        /> 

          <div className={styles.bitmaskContent}>
            {classFiltersEntries.map(([key, { imagePath, description, title }]) => (
              <div key={key} style={getClassStyle(key)} className={styles.contentItem}>
                <div className={styles.imageContainer}>
                <img className={styles.image} src={`/images/${imagePath}`} alt="moon phase" />
                </div>
                {(input & key) > 0 && 
                <div className={styles.descBox}>
                  <h4 className={styles.moonTitle}>{title}</h4>
                  <p className={styles.moonDesc}>{description}</p>
                </div>}
              </div>
            ))}
          </div>
      </main>
      <Footer />
    </>
  );
}