import Link from "next/link";
import { oxanium } from "@/app/styles/fonts";

export default function SecondaryLinkButton({ linkTo, buttonText }) {
  return (
    <Link
      href={linkTo}
      className={`bg-transparent border-2 border-white hover:border-transparent hover:bg-clutchBlue-100 transition duration-300 text-white hover:text-clutchBlue-800 uppercase font-medium w-fit h-fit px-6 py-3 ${oxanium.className}`}
    >
      {buttonText}
    </Link>
  );
}
