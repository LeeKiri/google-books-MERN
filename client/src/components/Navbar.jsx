import { Container, Menu } from "semantic-ui-react";

const Navbar = () => {
  return (
    <>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            Google Books{" "}
          </Menu.Item>
          <Menu.Item as="a">Home</Menu.Item>
          <Menu.Item as="a">Saved</Menu.Item>
        </Container>
      </Menu>
    </>
  );
};

export default Navbar;
