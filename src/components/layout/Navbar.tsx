import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  makeStyles,
  shorthands,
  tokens,
  Button,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItemLink,
  mergeClasses,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow4,
    ...shorthands.borderBottom('1px', 'solid', tokens.colorNeutralStroke1),
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1440px',
    margin: '0 auto',
    ...shorthands.padding('0', tokens.spacingHorizontalXXL),
    height: '48px',
  },
  logo: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorBrandForeground1,
    textDecoration: 'none',
    ':hover': {
      color: tokens.colorBrandForeground2Hover,
    },
  },
  nav: {
    display: 'flex',
    gap: tokens.spacingHorizontalM,
    '@media(max-width: 768px)': {
      display: 'none',
    },
  },
  navLink: {
    color: tokens.colorNeutralForeground1,
    textDecoration: 'none',
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalM),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
      color: tokens.colorNeutralForeground1Hover,
    },
  },
  activeLink: {
    color: tokens.colorBrandForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },
  menuButton: {
    display: 'none',
    '@media(max-width: 768px)': {
      display: 'block',
      marginLeft: 'auto',
    },
  },
  mobileNav: {
    display: 'none',
    flexDirection: 'column',
    ...shorthands.padding(tokens.spacingVerticalS, 0),
    '@media(max-width: 768px)': {
      display: 'flex',
      position: 'absolute',
      top: '48px',
      left: 0,
      right: 0,
      backgroundColor: tokens.colorNeutralBackground1,
      boxShadow: tokens.shadow8,
      zIndex: 1000,
    },
  },
  mobileNavLink: {
    ...shorthands.padding(tokens.spacingVerticalM, tokens.spacingHorizontalXL),
    color: tokens.colorNeutralForeground1,
    textDecoration: 'none',
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
});

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/about', label: 'About' },
];

export const Navbar = () => {
  const styles = useStyles();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          NexaX
        </Link>
        
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={mergeClasses(
                styles.navLink,
                location.pathname === item.path && styles.activeLink
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Menu open={isMobileMenuOpen} onOpenChange={(_, data) => setIsMobileMenuOpen(data.open)}>
          <MenuTrigger disableButtonEnhancement>
            <Button 
              appearance="transparent" 
              icon={<span>☰</span>} 
              className={styles.menuButton}
              aria-label="Toggle menu"
            />
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              {navItems.map((item) => (
                <MenuItemLink
                  key={item.path}
                  as="a"
                  href={item.path}
                  className={mergeClasses(
                    styles.mobileNavLink,
                    location.pathname === item.path && styles.activeLink
                  )}
                >
                  {item.label}
                </MenuItemLink>
              ))}
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>
    </header>
  );
};

export default Navbar;
