
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserPlus, CalendarPlus, FileText, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      icon: UserPlus,
      label: 'Add Patient',
      description: 'Register new patient',
      action: () => navigate('/patients')
    },
    {
      icon: CalendarPlus,
      label: 'Schedule Appointment',
      description: 'Book new appointment',
      action: () => navigate('/appointments')
    },
    {
      icon: FileText,
      label: 'Medical Records',
      description: 'View patient records',
      action: () => navigate('/records')
    },
    {
      icon: Settings,
      label: 'Settings',
      description: 'Manage clinic settings',
      action: () => navigate('/settings')
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks and shortcuts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-start h-auto p-4"
              onClick={action.action}
            >
              <div className="flex items-center space-x-3">
                <action.icon className="h-5 w-5 text-medical-blue" />
                <div className="text-left">
                  <p className="font-medium">{action.label}</p>
                  <p className="text-xs text-gray-600">{action.description}</p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
