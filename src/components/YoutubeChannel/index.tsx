import Section from '@/ui/Section';
import styles from './styles.module.css';

const YoutubeChannel = () => {
  return (
    <Section title='Conoce nuestro canal de Youtube' bg='#dedede'>
      <div className={styles.container}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
          facere?
        </p>
        <iframe
          className={styles.video}
          src='https://www.youtube.com/embed/9JzmrdYx3c4'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        />
      </div>
    </Section>
  );
};

export default YoutubeChannel;
