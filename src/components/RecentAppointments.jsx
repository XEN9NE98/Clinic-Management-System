
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User } from 'lucide-react';

const RecentAppointments = () => {
  const appointments = [
    {
      id: 1,
      patient: 'John Doe',
      time: '09:00 AM',
      type: 'Checkup',
      status: 'scheduled'
    },
    {
      id: 2,
      patient: 'Jane Smith',
      time: '10:30 AM',
      type: 'Follow-up',
      status: 'in-progress'
    },
    {
      id: 3,
      patient: 'Mike Johnson',
      time: '02:00 PM',
      type: 'Consultation',
      status: 'scheduled'
    },
    {
      id: 4,
      patient: 'Sarah Wilson',
      time: '03:30 PM',
      type: 'Emergency',
      status: 'urgent'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'urgent': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Appointments</CardTitle>
        <CardDescription>Manage your scheduled appointments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-medical-blue p-2 rounded-full">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{appointment.patient}</p>
                  <p className="text-sm text-gray-600">{appointment.type}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  {appointment.time}
                </div>
                <Badge className={getStatusColor(appointment.status)}>
                  {appointment.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentAppointments;
