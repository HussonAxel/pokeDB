import { FooterProps } from "./Footer.type";

export default function Footer({ test }: FooterProps) {
  return (
    <footer>
      <hr />
      {test}
    </footer>
  );
}
