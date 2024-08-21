import { AppBar, styled, Toolbar } from '@mui/material'
import React from 'react'

const Header = () => {

    const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;

  return (
    <Container>
        <Toolbar>
          <img src="https://cdn.dribbble.com/users/299/screenshots/5648722/codepen-logo-gifc2.gif" alt='logo'  width={60} height={60}/>
        </Toolbar>
      </Container>
  )
}

export default Header