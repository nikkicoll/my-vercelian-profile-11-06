import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for dog walking schedule
const schedule = [
  { day: "Monday", times: ["9:00 AM", "3:00 PM"] },
  { day: "Tuesday", times: ["10:00 AM", "4:00 PM"] },
  { day: "Wednesday", times: ["9:00 AM", "3:00 PM"] },
  { day: "Thursday", times: ["10:00 AM", "4:00 PM"] },
  { day: "Friday", times: ["9:00 AM", "3:00 PM"] },
  { day: "Saturday", times: ["11:00 AM"] },
  { day: "Sunday", times: ["11:00 AM"] },
]

export default function DogWalkingSchedule() {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-pink-50">
      <CardHeader className="bg-pink-500 text-white">
        <CardTitle className="text-2xl font-bold text-center">Weekly Dog Walking Schedule</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {schedule.map((day) => (
            <Card key={day.day} className="bg-white shadow-md">
              <CardHeader className="bg-pink-200 py-2">
                <CardTitle className="text-lg font-semibold text-pink-800">{day.day}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                {day.times.map((time, index) => (
                  <Badge key={index} variant="outline" className="bg-pink-100 text-pink-800 m-1">
                    {time}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
