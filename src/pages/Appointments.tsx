
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Plus, Filter } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const appointments = [
    {
      id: 1,
      patient: 'John Doe',
      time: '09:00',
      duration: '30 min',
      type: 'Checkup',
      status: 'confirmed',
      doctor: 'Dr. Smith'
    },
    {
      id: 2,
      patient: 'Jane Smith',
      time: '10:30',
      duration: '45 min',
      type: 'Follow-up',
      status: 'in-progress',
      doctor: 'Dr. Smith'
    },
    {
      id: 3,
      patient: 'Mike Johnson',
      time: '14:00',
      duration: '60 min',
      type: 'Consultation',
      status: 'pending',
      doctor: 'Dr. Smith'
    },
    {
      id: 4,
      patient: 'Sarah Wilson',
      time: '15:30',
      duration: '30 min',
      type: 'Emergency',
      status: 'urgent',
      doctor: 'Dr. Smith'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'cancelled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
              <p className="text-gray-600">Manage your appointment schedule</p>
            </div>
            <Button className="bg-medical-blue hover:bg-medical-blue/90">
              <Plus className="h-4 w-4 mr-2" />
              Schedule Appointment
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Calendar/Date Selector */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Quick Filters</h4>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Filter className="h-4 w-4 mr-2" />
                      All Appointments
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Clock className="h-4 w-4 mr-2" />
                      Today
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Calendar className="h-4 w-4 mr-2" />
                      This Week
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Appointments List */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Appointments for {selectedDate}</CardTitle>
                <CardDescription>Today's scheduled appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <div className="bg-medical-blue text-white px-2 py-1 rounded text-sm font-medium">
                              {appointment.time}
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">{appointment.patient}</h3>
                              <p className="text-sm text-gray-600">{appointment.type} • {appointment.duration}</p>
                              <p className="text-xs text-gray-500">with {appointment.doctor}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(appointment.status)}>
                            {appointment.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Appointments;
