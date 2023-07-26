import Navbar from "./Navbar";
import Image from "next/image";

export default function Dashboard() {
  return (
    <main ClassName=" px-12 py-12">
      <Navbar />
      <div className="fixed w-full h-screen">
        <div className="relative  h-full w-full">
          <Image
            className="py-20"
            fill
            style={{ objectFit: "contain" }}
            src="/logo.png"
          />
          <div className="relative w-full h-full bg-white/90 " />
        </div>
      </div>

      <title>LMS</title>
    </main>
  );
}
