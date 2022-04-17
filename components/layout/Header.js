import Image from "next/image";

import logo from "../../public/images/logo.png";

export default function Header() {
  return (
    <div className="p-10">
      <div className="flex items-center justify-between max-w-screen-xl px-6 mx-auto bg-white rounded-xl">
        <div className="cursor-pointer">
          <Image src={logo} height={110} width={120} />
        </div>
        <ul className="flex gap-20 text-xl font-semibold list-none">
          <li className="cursor-pointer">Tracker</li>
          <li className="cursor-pointer">Financial Forecast</li>
        </ul>
      </div>
    </div>
  );
}
