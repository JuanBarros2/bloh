import Header from "./Header";

describe("Header", () => {
  describe("Mobile", () => {
    it("should match snapshot test", () => {
      const { container } = render(<Header />);
      expect(container.firstChild).toMatchSnapshot();
    });
  })
  describe("Desktop", () => {
    it("should match snapshot test", () => {
      const { container } = render(<Header />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});


