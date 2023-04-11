import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/layout";
import Hero from "@/components/sections/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}
