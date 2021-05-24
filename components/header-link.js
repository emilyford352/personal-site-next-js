import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 170px;
  text-align: center;
  padding: 10px;
  margin: 5px;
  border-radius: 3px;
  text-decoration: none;
  background-color: #d69ad6;
  color: white;
  &:visited {
      color: inherit;
  }
  &: hover {
      solid 4px lime;
      cursor: pointer;
      background-color: purple;
      box-shadow: 0 2px 25px #d69ad6;  
  }
  &.active {
    background-color: purple;
  }
`;

export default function HeaderLink({ activePath, path, pathName }) {
  return (
    <Link href={path}>
      <StyledLink className={activePath === path ? 'active' : ''}>{pathName}</StyledLink>
    </Link>
  );
}
