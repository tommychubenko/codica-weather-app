import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #ed3e49;
  padding: 5px 10px;

  border-radius: 5px;
  &.active {
    box-shadow: 0px 0px 6px 1px rgba(237, 62, 73, 1);
  }
`;
