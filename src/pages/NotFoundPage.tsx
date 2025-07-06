import { makeStyles, shorthands, tokens, Text, Title1, Button } from '@fluentui/react-components';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh',
    textAlign: 'center',
    ...shorthands.padding(tokens.spacingVerticalXXL, tokens.spacingHorizontalXXL),
  },
  title: {
    fontSize: tokens.fontSizeHero800,
    fontWeight: tokens.fontWeightBold,
    color: tokens.colorPaletteRedForeground1,
    marginBottom: tokens.spacingVerticalM,
  },
  subtitle: {
    fontSize: tokens.fontSizeHero700,
    marginBottom: tokens.spacingVerticalM,
  },
  message: {
    maxWidth: '600px',
    marginBottom: tokens.spacingVerticalXXL,
    color: tokens.colorNeutralForeground2,
  },
  button: {
    marginTop: tokens.spacingVerticalM,
  },
});

export const NotFoundPage = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.title}>404</div>
      <Title1 className={styles.subtitle}>Page Not Found</Title1>
      <Text as="p" size={500} className={styles.message}>
        Oops! The page you're looking for doesn't exist or has been moved.
      </Text>
      <Button 
        appearance="primary" 
        size="large"
        className={styles.button}
        onClick={() => navigate('/')}
      >
        Return Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
