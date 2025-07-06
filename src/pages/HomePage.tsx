import { makeStyles, shorthands, tokens, Text, Title1 } from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    textAlign: 'center',
  },
  title: {
    marginBottom: tokens.spacingVerticalL,
    color: tokens.colorBrandForeground1,
  },
  description: {
    maxWidth: '600px',
    color: tokens.colorNeutralForeground2,
    ...shorthands.margin(0, 'auto', tokens.spacingVerticalL),
  },
});

export const HomePage = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Title1 className={styles.title}>Welcome to NexaX</Title1>
      <Text as="p" size={500} className={styles.description}>
        A modern, responsive web application built with React, TypeScript, and Fluent UI.
        Navigate using the menu above to explore different sections of the application.
      </Text>
    </div>
  );
};

export default HomePage;
