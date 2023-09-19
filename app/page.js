"use client";
import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import CheckFavs from "@/components/CheckFavs";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex relative">
      <CheckFavs />
      <div className="flex justify-center items-center mx-auto">
        <Card className="bg-gray-800">
          <Text className="text-6xl font-bold mb-3 text-center">
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
    </div>
  );
}
