import React, { useState } from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

export default function Cart() {
  const [numItems, setNumItems] = useState(0);

  return (
    <IconButton aria-label="cart" id="cart-icon">
      <StyledBadge badgeContent={numItems} color="primary">
        <ShoppingCartIcon
          fontSize="large"
          className="mx-0 my-0"
          style={{ color: '#fff' }}
        />
      </StyledBadge>
    </IconButton>
  );
}
