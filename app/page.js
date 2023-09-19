"use client";
import { useState, useEffect } from "react";
import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import CheckFavs from "@/components/CheckFavs";
import DarkMode from "@/lib/darkMode";
export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Render nothing until the component is mounted
  if (!isMounted) {
    return null;
  }
  return (
    <div className="min-h-screen bg-gray-900 flex relative">
      <CheckFavs />
      <div className="flex justify-center items-center mx-auto my-auto">
        <Card className="bg-gray-800">
          <Text className="text-7xl font-bold mb-3 text-center">
            Weather APP
          </Text>
          <Subtitle className="text-md text-center">
            Powered by Next.js 13.4, Tailwind CSS + More!
          </Subtitle>
          <Divider className="my-10 text-black" />
          <Card className="bg-gray-900">
            <CityPicker />
          </Card>
        </Card>
      </div>
      <DarkMode toggle={false} />
    </div>
  );
}
