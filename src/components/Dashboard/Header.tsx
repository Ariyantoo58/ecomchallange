import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const router = useRouter();

  const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (router) {
      router.back();
    }
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <button
        className="text-color-primary cursor-pointer"
        onClick={handleBack}
        title="Go Back"
      >
        <ArrowSquareLeft size={32} />
      </button>
      <h3 className="text-2xl text-color-primary font-bold">{title}</h3>
    </div>
  );
};

export default Header;
