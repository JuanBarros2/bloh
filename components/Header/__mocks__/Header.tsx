import { HeaderProps } from "../Header.d"

export const mockHeaderTestId = jest.fn(() => "Header TestId");

const Header = jest.fn(({ params }: HeaderProps) => {
  return (
    <div data-testid={mockHeaderTestId()}></div>
  );
});

export default Header;
