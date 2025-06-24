import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Database,
  Palette,
  Clock,
  Building,
  Save,
  Key
} from 'lucide-react';
import Sidebar from '@/components/Sidebar';

const Settings = () => {
  const [clinicSettings, setClinicSettings] = useState({
    clinicName: 'ClinicCare Medical Center',
    address: '123 Medical Drive, Healthcare City, HC 12345',
    phone: '+1 (555) 123-4567',
    email: 'contact@cliniccare.com',
    website: 'www.cliniccare.com',
    appointmentDuration: '30',
    workingHours: {
      start: '09:00',
      end: '17:00'
    }
  });

  const [userSettings, setUserSettings] = useState({
    firstName: 'Dr. John',
    lastName: 'Smith',
    email: 'dr.smith@cliniccare.com',
    phone: '+1 (555) 987-6543',
    specialization: 'General Medicine',
    licenseNumber: 'MD-12345'
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    appointmentReminders: true,
    systemAlerts: true,
    marketingEmails: false
  });

  const [systemSettings, setSystemSettings] = useState({
    autoBackup: true,
    dataRetention: '7',
    sessionTimeout: '30',
    twoFactorAuth: false,
    auditLogging: true
  });

const handleClinicSettingChange = (field: string, value: string) => {
  if (field.includes('.')) {
    const [parent, child] = field.split('.');

    setClinicSettings(prev => {
    const parentValue = prev[parent as keyof typeof prev];

    // Ensure parentValue is an object before spreading
    if (typeof parentValue === 'object' && parentValue !== null) {
        return {
        ...prev,
        [parent]: {
            ...parentValue,
            [child]: value
        }
        };
    }

    // fallback: treat as flat update if not an object
    return {
        ...prev,
        [parent]: {
        [child]: value
        }
    };
    });
} else {
    setClinicSettings(prev => ({
    ...prev,
    [field]: value
    }));
}
};

  const handleUserSettingChange = (field: string, value: string) => {
    setUserSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNotificationChange = (field: string, value: boolean) => {
    setNotifications(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSystemSettingChange = (field: string, value: string | boolean) => {
    setSystemSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Here you would typically save to your backend
    console.log('Settings saved:', { clinicSettings, userSettings, notifications, systemSettings });
    // Show success message
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
              <p className="text-gray-600">Manage your clinic and system preferences</p>
            </div>
            <Button onClick={handleSave} className="bg-medical-blue hover:bg-medical-blue/90">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>

        <Tabs defaultValue="clinic" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="clinic">
              <Building className="h-4 w-4 mr-2" />
              Clinic
            </TabsTrigger>
            <TabsTrigger value="profile">
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security">
              <Shield className="h-4 w-4 mr-2" />
              Security
            </TabsTrigger>
            <TabsTrigger value="system">
              <Database className="h-4 w-4 mr-2" />
              System
            </TabsTrigger>
          </TabsList>

          <TabsContent value="clinic">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinic Information</CardTitle>
                  <CardDescription>Basic clinic details and contact information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="clinicName">Clinic Name</Label>
                    <Input
                      id="clinicName"
                      value={clinicSettings.clinicName}
                      onChange={(e) => handleClinicSettingChange('clinicName', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={clinicSettings.address}
                      onChange={(e) => handleClinicSettingChange('address', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="clinicPhone">Phone</Label>
                    <Input
                      id="clinicPhone"
                      value={clinicSettings.phone}
                      onChange={(e) => handleClinicSettingChange('phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="clinicEmail">Email</Label>
                    <Input
                      id="clinicEmail"
                      type="email"
                      value={clinicSettings.email}
                      onChange={(e) => handleClinicSettingChange('email', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={clinicSettings.website}
                      onChange={(e) => handleClinicSettingChange('website', e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Operating Hours</CardTitle>
                  <CardDescription>Set your clinic's working hours and appointment settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="appointmentDuration">Default Appointment Duration (minutes)</Label>
                    <Input
                      id="appointmentDuration"
                      type="number"
                      value={clinicSettings.appointmentDuration}
                      onChange={(e) => handleClinicSettingChange('appointmentDuration', e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="workingStart">Start Time</Label>
                      <Input
                        id="workingStart"
                        type="time"
                        value={clinicSettings.workingHours.start}
                        onChange={(e) => handleClinicSettingChange('workingHours.start', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="workingEnd">End Time</Label>
                      <Input
                        id="workingEnd"
                        type="time"
                        value={clinicSettings.workingHours.end}
                        onChange={(e) => handleClinicSettingChange('workingHours.end', e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal and professional details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={userSettings.firstName}
                        onChange={(e) => handleUserSettingChange('firstName', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={userSettings.lastName}
                        onChange={(e) => handleUserSettingChange('lastName', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="userEmail">Email</Label>
                      <Input
                        id="userEmail"
                        type="email"
                        value={userSettings.email}
                        onChange={(e) => handleUserSettingChange('email', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="userPhone">Phone</Label>
                      <Input
                        id="userPhone"
                        value={userSettings.phone}
                        onChange={(e) => handleUserSettingChange('phone', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="specialization">Specialization</Label>
                      <Input
                        id="specialization"
                        value={userSettings.specialization}
                        onChange={(e) => handleUserSettingChange('specialization', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="licenseNumber">License Number</Label>
                      <Input
                        id="licenseNumber"
                        value={userSettings.licenseNumber}
                        onChange={(e) => handleUserSettingChange('licenseNumber', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose how you want to receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-gray-600">Receive notifications via email</p>
                  </div>
                  <Switch
                    checked={notifications.emailNotifications}
                    onCheckedChange={(checked) => handleNotificationChange('emailNotifications', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">SMS Notifications</h4>
                    <p className="text-sm text-gray-600">Receive notifications via SMS</p>
                  </div>
                  <Switch
                    checked={notifications.smsNotifications}
                    onCheckedChange={(checked) => handleNotificationChange('smsNotifications', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Appointment Reminders</h4>
                    <p className="text-sm text-gray-600">Get reminders for upcoming appointments</p>
                  </div>
                  <Switch
                    checked={notifications.appointmentReminders}
                    onCheckedChange={(checked) => handleNotificationChange('appointmentReminders', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">System Alerts</h4>
                    <p className="text-sm text-gray-600">Receive important system notifications</p>
                  </div>
                  <Switch
                    checked={notifications.systemAlerts}
                    onCheckedChange={(checked) => handleNotificationChange('systemAlerts', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Marketing Emails</h4>
                    <p className="text-sm text-gray-600">Receive updates about new features</p>
                  </div>
                  <Switch
                    checked={notifications.marketingEmails}
                    onCheckedChange={(checked) => handleNotificationChange('marketingEmails', checked)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security and authentication</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Two-Factor Authentication</h4>
                      <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                    </div>
                    <Switch
                      checked={systemSettings.twoFactorAuth}
                      onCheckedChange={(checked) => handleSystemSettingChange('twoFactorAuth', checked)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                    <Input
                      id="sessionTimeout"
                      type="number"
                      value={systemSettings.sessionTimeout}
                      onChange={(e) => handleSystemSettingChange('sessionTimeout', e.target.value)}
                      className="w-32"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                  <CardDescription>Update your account password</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button className="bg-medical-blue hover:bg-medical-blue/90">
                    <Key className="h-4 w-4 mr-2" />
                    Update Password
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="system">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Configure system behavior and data management</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Automatic Backup</h4>
                    <p className="text-sm text-gray-600">Automatically backup your data daily</p>
                  </div>
                  <Switch
                    checked={systemSettings.autoBackup}
                    onCheckedChange={(checked) => handleSystemSettingChange('autoBackup', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Audit Logging</h4>
                    <p className="text-sm text-gray-600">Keep detailed logs of system activities</p>
                  </div>
                  <Switch
                    checked={systemSettings.auditLogging}
                    onCheckedChange={(checked) => handleSystemSettingChange('auditLogging', checked)}
                  />
                </div>
                <div>
                  <Label htmlFor="dataRetention">Data Retention Period (years)</Label>
                  <Input
                    id="dataRetention"
                    type="number"
                    value={systemSettings.dataRetention}
                    onChange={(e) => handleSystemSettingChange('dataRetention', e.target.value)}
                    className="w-32"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Settings;