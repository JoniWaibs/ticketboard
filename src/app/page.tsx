"use client"

import Link from "next/link"
import { Download } from "lucide-react"
import { Button } from "../components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Card, CardContent, CardHeader } from "../components/ui/card"
import { friends } from "./data/friends"
import { Friend } from "./models/friend"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-3">
      <div className="max-w-[100%] mx-auto">
        <h1 className="text-2xl font-bold py-4 text-center">🎟️ Tickets del Viaje</h1>

        <h3 className="text-lg font-bold text-center py-4">🚌 desde SM de Tucuman a Tafi del Valle</h3>

        <div className="grid grid-cols-2 gap-3">
          {friends.map((friend: Friend) => (
            <Card
              key={friend.slug}
              className="gap-1 shadow-md hover:shadow-lg transition-shadow aspect-square flex flex-col p-0"
            >
              <CardHeader className=" flex-1 flex flex-col items-center justify-center text-center">
                <Avatar className="h-24 w-24 mb-2 border-2 border-blue-100">
                  <AvatarImage src={friend.avatar || "/placeholder.svg"} alt={friend.name}/>
                  <AvatarFallback className="text-lg">{friend.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="mt-1">
                  <h3 className="font-bold text-base">{friend.name}</h3>
                </div>
              </CardHeader>

              <CardContent className="p-2 pt-0">
                <Link href={`/ticket/${friend.slug}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 py-1 text-xs text-white px-2">
                    <Download className="h-3 w-3 mr-1" />
                    Descargar pasaje
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
