import Link from "next/link";

interface HeaderProps {
  title: string;
  linkHref?: string;
  linkTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
      {/* {linkHref && linkTitle ? (
        <Link href={linkHref} passHref>
          <a className="md:text-xl text-sm underline hover:text-color-accent text-color-primary transition-all">
            {linkTitle}
          </a>
        </Link>
      ) : null} */}
    </div>
  );
};

export default Header;
