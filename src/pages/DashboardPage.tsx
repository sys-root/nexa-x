import {
  makeStyles,
  shorthands,
  tokens,
  Text,
  Title1,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    ...shorthands.padding(
      tokens.spacingVerticalXXL,
      tokens.spacingHorizontalXXL,
    ),
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    marginBottom: tokens.spacingVerticalXXL,
    display: 'flex',
    flexDirection: 'column',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: tokens.spacingHorizontalL,
    marginBottom: tokens.spacingVerticalXXL,
  },
  statCard: {
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ...shorthands.padding(tokens.spacingVerticalL, tokens.spacingHorizontalL),
    boxShadow: tokens.shadow4,
  },
  statValue: {
    fontSize: tokens.fontSizeHero800,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorBrandForeground1,
    lineHeight: '1',
    marginBottom: tokens.spacingVerticalXS,
  },
  statLabel: {
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase300,
  },
});

export const DashboardPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Title1>Dashboard</Title1>
        <Text as="p" size={400}>
          Overview of your application metrics and statistics.
        </Text>
      </header>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>1,234</div>
          <div className={styles.statLabel}>Total Users</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>89%</div>
          <div className={styles.statLabel}>Success Rate</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>42</div>
          <div className={styles.statLabel}>New Today</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>98.7%</div>
          <div className={styles.statLabel}>Uptime</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
