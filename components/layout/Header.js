import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useExpense } from "../../context/ExpenseContext";

import logo from "../../public/images/logo.png";

export default function Header() {
  const router = useRouter();
  const { expenses } = useExpense();

  const routingController = () => {
    if (expenses?.length === 0) {
      window.alert("Please add an income first and an expense first");
    } else {
      router.push("/forecast");
    }
  };
  return (
    <div className="p-3 sm:p-10 ">
      <div className="flex items-center justify-between max-w-screen-xl pl-3 pr-0 mx-auto bg-white sm:px-6 rounded-xl">
        <div className="cursor-pointer">
          <Link href="/">
            <Image src={logo} alt="Expense Tracker" height={110} width={120} />
          </Link>
        </div>
        <ul className="flex justify-center gap-4 text-xl font-semibold list-none sm:gap-20">
          <Link href="/">
            <li className="self-center cursor-pointer">Tracker</li>
          </Link>

          <li
            className="text-center cursor-pointer"
            onClick={() => routingController()}
          >
            Financial Forecast
          </li>
        </ul>
      </div>
    </div>
  );
}
