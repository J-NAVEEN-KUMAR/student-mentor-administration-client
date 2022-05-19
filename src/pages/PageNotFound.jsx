import { useLottie } from "lottie-react";
import notfoundlottie from "./notfoundlottie.json";

const PageNotFound = () => {
  //Lottie animation
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: notfoundlottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const mod = {
    height: 500,
    width: 500,
  };
  const { View } = useLottie(defaultOptions, mod);
  return <div className="pagenotfound">{View}</div>;
};

export default PageNotFound;
