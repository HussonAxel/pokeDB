export default function Header() {
  return (
    <header className="h-full max-h-[80px] duration-500 transition-colors ease-in-out group grainy-red hover:bg-cream">
      <nav>
        <ul>
          <li className="font-Anton text-3xl py-4 w-full text-center">
            <a className="cursor-pointer transition-colors duration-500 ease-in-out text-cream group-hover:text-red hover-underline-animation inline-block">
              MENU
            </a>
          </li>
        </ul>
      </nav>
      <hr className="transition duration-500 ease-in-out border-cream group-hover:border-black border-[1.66px]" />
    </header>
  );
}
