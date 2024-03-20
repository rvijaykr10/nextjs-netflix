import Link from "next/link";
function getLogo() {
  return (
    <svg
      width="111"
      height="30"
      viewBox="0 0 111 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2_166)">
        <path
          d="M15.2628 28.0656C13.5931 28.3588 11.8939 28.4467 10.1362 28.6809L4.77506 12.9787V29.3548C3.10529 29.5305 1.58197 29.7648 0 29.9992V0.000801086H4.45301L10.5463 17.0216V0.000801086H15.2628V28.0656ZM24.4909 10.9865C26.3073 10.9865 29.0903 10.8986 30.7601 10.8986V15.5858C28.6801 15.5858 26.2487 15.5858 24.4909 15.6737V22.6461C27.2448 22.4704 29.9985 22.2358 32.7814 22.1479V26.6591L19.8035 27.6847V0.000801086H32.7814V4.68806H24.4909V10.9865ZM50.2121 4.68817H45.3491V26.2495C43.7672 26.2495 42.1852 26.2495 40.6621 26.3079V4.68817H35.7991V0.000801086H50.2123L50.2121 4.68817ZM57.8288 10.6644H64.2446V15.3515H57.8288V25.9859H53.2292V0.000801086H66.3246V4.68806H57.8288V10.6644ZM73.9413 21.8844C76.6072 21.9428 79.3022 22.1482 81.9097 22.2945V26.9232C77.7205 26.6593 73.5312 26.396 69.2541 26.3079V0.000801086H73.9413V21.8844ZM85.8645 27.2454C87.3585 27.3335 88.9405 27.4214 90.4638 27.5969V0.000801086H85.8645V27.2454ZM111 0.000801086L105.053 14.2677L111 29.9992C109.242 29.7648 107.484 29.4426 105.727 29.1496L102.358 20.4783L98.9306 28.4467C97.2311 28.1535 95.5906 28.0656 93.8918 27.8312L99.9266 14.0917L94.4775 0.000801086H99.5161L102.592 7.88126L105.873 0.000801086H111V0.000801086Z"
          fill="#B9090B"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_166">
          <rect
            width="111"
            height="29.9984"
            fill="white"
            transform="translate(0 0.000801086)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Navbar() {
  return (
    <div className="h-20 w-screen bg-black flex flex-left items-center z-10">
      <div className="pr-12">
        <Link href={"/"}>{getLogo()}</Link>
      </div>
      <ul className="text-white flex items-center h-full">
        <li className="pr-10 font-sans text-sm font-normal">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="pr-10 font-sans text-sm font-normal">
          <Link href={"/movies"}>Movies</Link>
        </li>
        <li className="pr-10 font-sans text-sm font-normal">
          <Link href={"/tv-shows"}>TV Shows</Link>
        </li>
      </ul>
      <div />
    </div>
  );
}
