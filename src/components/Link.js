import PropTypes from 'prop-types'
import {Button} from "@mui/material";

const Link = ({active, children, onClick}) => {
  return <Button variant={"contained"}
    disabled={active}
    onClick={onClick}
    style={{
        marginLeft: '4px',
    }}
  >
      {children}
  </Button>
}

Link.prototype = {
    active: PropTypes.bool.prototype,
    onClick: PropTypes.func.prototype,
    children: PropTypes.node.prototype
}

export default Link;
