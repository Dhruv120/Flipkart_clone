import React, { useState } from "react";

import { ButtonGroup, Button, styled } from "@mui/material";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const ButtonGrp = () => {
  return (
    <Component>
            <StyledButton >-</StyledButton>
            <Button disabled>1</Button>
            <StyledButton >+</StyledButton>
    </Component>
  )
}

export default ButtonGrp