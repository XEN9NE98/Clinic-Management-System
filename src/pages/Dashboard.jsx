
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Calendar, Clock, TrendingUp, UserPlus, CalendarPlus } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import StatsCard from '@/components/StatsCard';
import RecentAppointments from '@/components/RecentAppointments';
import QuickActions from '@/components/QuickActions';

const Dashboard = () => {
  const stats = [
    {
      title: "Total Patients",
      value: "1,234",
      change: "+12%",
      icon: Users,
      color: "text-medical-blue"
    },
    {
      title: "Today's Appointments",
      value: "28",
      change: "+5%",
      icon: Calendar,
      color: "text-medical-green"
    },
    {
      title: "Pending Appointments",
      value: "7",
      change: "-2%",
      icon: Clock,
      color: "text-orange-500"
    },
    {
      title: "Monthly Revenue",
      value: "$24,500",
      change: "+18%",
      icon: TrendingUp,
      color: "text-green-600"
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, Dr. Smith</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Appointments */}
          <div className="lg:col-span-2">
            <RecentAppointments />
          </div>

          {/* Quick Actions */}
          <div>
            <QuickActions />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
