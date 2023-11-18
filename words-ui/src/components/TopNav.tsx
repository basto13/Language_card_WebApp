import { AppBar, Toolbar, Typography, Button, Link } from "@mui/material"
import { useAuth } from "../services/auth/auth-provider"

export const TopNav = () => {
  const auth = useAuth();

  const toggleLogin = () => {
    auth.signout();
  }

  return <AppBar
    position="static"
    color="default"
    elevation={0}
    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
  >
    <Toolbar sx={{ flexWrap: 'wrap' }}>
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        Learn English
      </Typography>
      <nav>
        <Link
          variant="button"
          color="text.primary"
          href="/tests"
          sx={{ my: 1, mx: 1.5 }}
        >
          Tests
        </Link>
      </nav>
      <Button variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick={toggleLogin}>
        Logout
      </Button>
    </Toolbar>
  </AppBar>
}