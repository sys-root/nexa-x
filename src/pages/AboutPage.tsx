import {
  makeStyles,
  shorthands,
  tokens,
  Text,
  Title1,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    ...shorthands.padding(
      tokens.spacingVerticalXXL,
      tokens.spacingHorizontalXXL,
    ),
  },
  header: {
    marginBottom: tokens.spacingVerticalXXL,
    display: 'flex',
    flexDirection: 'column',
  },
  section: {
    marginBottom: tokens.spacingVerticalXXL,
    display: 'flex',
    flexDirection: 'column',
  },
});

export const AboutPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Title1>About Us</Title1>
        <Text as="p" size={500}>
          Learn more about our company and the team behind NexaX.
        </Text>
      </header>

      <section className={styles.section}>
        <Text
          as="h2"
          size={600}
          style={{ marginBottom: tokens.spacingVerticalM }}
        >
          Our Mission
        </Text>
        <Text as="p" className={styles.paragraph}>
          At NexaX, we're dedicated to building intuitive, responsive, and
          accessible web applications that solve real-world problems. Our
          mission is to deliver exceptional user experiences through clean,
          maintainable code and modern design principles.
        </Text>
      </section>
    </div>
  );
};

export default AboutPage;
