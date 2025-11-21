import { Cloud, Thermometer, Droplets, Wind, Sun, CloudRain } from 'lucide-react';
import Card from '@/components/card';

export default function ClimatePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900">Climate Monitoring</h1>
        <p className="text-neutral-600 mt-2">Real-time weather data and climate insights for your farms</p>
      </div>

      {/* Current Weather Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Temperature</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">28°C</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                <Thermometer className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Humidity</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">65%</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Wind Speed</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">12 km/h</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <Wind className="w-6 h-6 text-cyan-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Rainfall</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">5 mm</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <CloudRain className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>
      </div>

      {/* Weather Forecast */}
      <Card.Card className="border-neutral-200">
        <Card.CardHeader>
          <Card.CardTitle>7-Day Forecast</Card.CardTitle>
          <Card.CardDescription>Weather predictions for the upcoming week</Card.CardDescription>
        </Card.CardHeader>
        <Card.CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { day: 'Mon', temp: '29°C', condition: 'Sunny', icon: Sun },
              { day: 'Tue', temp: '27°C', condition: 'Cloudy', icon: Cloud },
              { day: 'Wed', temp: '26°C', condition: 'Rainy', icon: CloudRain },
              { day: 'Thu', temp: '28°C', condition: 'Sunny', icon: Sun },
              { day: 'Fri', temp: '30°C', condition: 'Sunny', icon: Sun },
              { day: 'Sat', temp: '28°C', condition: 'Cloudy', icon: Cloud },
              { day: 'Sun', temp: '27°C', condition: 'Rainy', icon: CloudRain },
            ].map((forecast, index) => {
              const Icon = forecast.icon;
              return (
                <div key={index} className="text-center p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                  <p className="text-sm font-medium text-neutral-900 mb-2">{forecast.day}</p>
                  <Icon className="w-8 h-8 mx-auto mb-2 text-[#1F8A34]" />
                  <p className="text-lg font-bold text-neutral-900">{forecast.temp}</p>
                  <p className="text-xs text-neutral-600 mt-1">{forecast.condition}</p>
                </div>
              );
            })}
          </div>
        </Card.CardContent>
      </Card.Card>

      {/* Climate Data by Farm */}
      <Card.Card className="border-neutral-200">
        <Card.CardHeader>
          <Card.CardTitle>Climate Data by Farm</Card.CardTitle>
          <Card.CardDescription>Current weather conditions at each farm location</Card.CardDescription>
        </Card.CardHeader>
        <Card.CardContent>
          <div className="space-y-4">
            {[
              { farm: 'Green Valley Farm', temp: '28°C', humidity: '68%', rainfall: '6 mm', windSpeed: '10 km/h', status: 'Optimal' },
              { farm: 'Sunrise Acres', temp: '30°C', humidity: '55%', rainfall: '3 mm', windSpeed: '15 km/h', status: 'Hot' },
              { farm: 'Golden Fields', temp: '26°C', humidity: '72%', rainfall: '8 mm', windSpeed: '12 km/h', status: 'Wet' },
              { farm: 'River Bend Farm', temp: '27°C', humidity: '65%', rainfall: '5 mm', windSpeed: '11 km/h', status: 'Optimal' },
            ].map((farm, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1F8A34]/10 flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-[#1F8A34]" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">{farm.farm}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <p className="text-sm text-neutral-600 flex items-center gap-1">
                        <Thermometer className="w-4 h-4" />
                        {farm.temp}
                      </p>
                      <p className="text-sm text-neutral-600 flex items-center gap-1">
                        <Droplets className="w-4 h-4" />
                        {farm.humidity}
                      </p>
                      <p className="text-sm text-neutral-600 flex items-center gap-1">
                        <CloudRain className="w-4 h-4" />
                        {farm.rainfall}
                      </p>
                      <p className="text-sm text-neutral-600 flex items-center gap-1">
                        <Wind className="w-4 h-4" />
                        {farm.windSpeed}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    farm.status === 'Optimal' 
                      ? 'bg-[#1F8A34]/10 text-[#1F8A34]' 
                      : farm.status === 'Hot'
                      ? 'bg-orange-500/10 text-orange-600'
                      : 'bg-blue-500/10 text-blue-600'
                  }`}>
                    {farm.status}
                  </span>
                  <button className="text-neutral-600 hover:text-[#1F8A34] transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card.CardContent>
      </Card.Card>
    </div>
  );
}
