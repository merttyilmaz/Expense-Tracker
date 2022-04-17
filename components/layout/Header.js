import Image from "next/image";

import logo from "../../public/images/logo.png";

export default function Header() {
  return (
    <div className="p-3 sm:p-10 ">
      <div className="flex items-center justify-between max-w-screen-xl pl-3 pr-0 mx-auto bg-white sm:px-6 rounded-xl">
        <div className="cursor-pointer">
          <Image src={logo} alt="Expense Tracker" height={110} width={120} />
        </div>
        <ul className="flex justify-center text-xl font-semibold list-none sm:gap-20">
          <li className="self-center cursor-pointer">Tracker</li>
          <li className="text-center cursor-pointer">Financial Forecast</li>
        </ul>
      </div>
    </div>
  );
}
