import { Card, Typography } from '@material-ui/core';
import React from 'react';
import styles from './about.module.scss';

const About = () => (
  <div className={styles.about} id="about">
    <div className={styles.wrapper_about}>
      <Typography className={styles.title} variant="h2" component="article">
        Why are we the coolest
      </Typography>
      <Typography className={styles.subtitle} variant="subtitle2" component="article">
        or how we created the most robotic company in the world
      </Typography>
    </div>
    <section className={styles.row}>
      <div className={styles.content}>
        <Typography variant="h5" component="article">
          Robots, robots and more robots!
        </Typography>
        <Typography component="p" className={styles.paragraph}>
          Created in agony with the dream of the impossible in symbiosis with many scientific organizations,
          a company specializing in convenient, fast and reliable delivery from one point of the world to another.
        </Typography>
      </div>
      <Card className={styles.photo} />
    </section>
    <section className={styles.row}>
      <Typography variant="h5" component="article">
        Features
      </Typography>
      <Typography component="p" className={styles.paragraph}>
        The advantage of our company is that almost everything is automated and robotic.
        In collaboration with <em>General Atomics International</em> and <em>RobCo Industries</em>, robots have been developed
        for loading or unloading Mr. Handy and Securitron. The Securitron model has been retrofitted for warehouse
        operations. Equipped with a quantum AI chip, they are able to adequately communicate with people and
        understand their desires.
      </Typography>
    </section>
    <section className={styles.row}>
      <Typography variant="h5" component="article">
        People
      </Typography>
      <Typography component="p" className={styles.paragraph}>
        Although we have the most robotic company, people also found places here. About 10% of our staff are people.
        For more effective work of human personnel, they are provided with a special outer shell "T3000", which is
        an exoskeleton that increases the strength, endurance and security of the carrier.
      </Typography>
      <div className={styles.armor} />
    </section>
  </div>
);

export default About;