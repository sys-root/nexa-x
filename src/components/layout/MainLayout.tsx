import type { ReactNode } from 'react';
import { makeStyles, shorthands, tokens } from '@fluentui/react-components';
import Navbar from './Navbar';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: tokens.colorNeutralBackground2,
  },
  content: {
    flex: 1,
    ...shorthands.padding(
      tokens.spacingHorizontalXXXL,
      tokens.spacingHorizontalXXL,
    ),
    '@media(max-width: 768px)': {
      ...shorthands.padding(
        tokens.spacingHorizontalL,
        tokens.spacingHorizontalM,
      ),
    },
  },
});

type MainLayoutProps = {
  children?: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Navbar />
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default MainLayout;
