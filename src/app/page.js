import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="h-[100vh]  aspect-auto relative">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,165.3C672,160,768,160,864,160C960,160,1056,160,1152,186.7C1248,213,1344,267,1392,293.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="absolute top-[5rem] right-0">
        <img src="/hero-img.png" />
      </div>
      <div className="absolute inset-0  p-6 h-[80vh] bg-[/next.svg]">
        <Navbar />
      </div>
    </main>
  );
}
