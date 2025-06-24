import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Plus, 
  FileText, 
  Download, 
  Eye, 
  Filter,
  Calendar,
  User,
  Stethoscope,
  Activity
} from 'lucide-react';
import Sidebar from '@/components/Sidebar';

const MedicalRecords = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const records = [
    {
      id: 1,
      patientName: 'John Doe',
      patientId: 'P001',
      recordType: 'Consultation',
      date: '2024-01-15',
      doctor: 'Dr. Smith',
      diagnosis: 'Hypertension',
      status: 'Completed',
      category: 'cardiology'
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      patientId: 'P002',
      recordType: 'Lab Results',
      date: '2024-01-14',
      doctor: 'Dr. Johnson',
      diagnosis: 'Blood Test - Normal',
      status: 'Reviewed',
      category: 'laboratory'
    },
    {
      id: 3,
      patientName: 'Mike Johnson',
      patientId: 'P003',
      recordType: 'Follow-up',
      date: '2024-01-13',
      doctor: 'Dr. Smith',
      diagnosis: 'Diabetes Management',
      status: 'Pending Review',
      category: 'endocrinology'
    },
    {
      id: 4,
      patientName: 'Sarah Wilson',
      patientId: 'P004',
      recordType: 'Emergency',
      date: '2024-01-12',
      doctor: 'Dr. Brown',
      diagnosis: 'Acute Appendicitis',
      status: 'Completed',
      category: 'emergency'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: 'New record created',
      patient: 'John Doe',
      time: '2 hours ago',
      type: 'create'
    },
    {
      id: 2,
      action: 'Record updated',
      patient: 'Jane Smith',
      time: '4 hours ago',
      type: 'update'
    },
    {
      id: 3,
      action: 'Lab results uploaded',
      patient: 'Mike Johnson',
      time: '1 day ago',
      type: 'upload'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Reviewed': return 'bg-blue-100 text-blue-800';
      case 'Pending Review': return 'bg-yellow-100 text-yellow-800';
      case 'Draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'cardiology': return <Activity className="h-4 w-4" />;
      case 'laboratory': return <FileText className="h-4 w-4" />;
      case 'endocrinology': return <Stethoscope className="h-4 w-4" />;
      case 'emergency': return <Activity className="h-4 w-4 text-red-500" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const filteredRecords = records.filter(record => {
    const matchesSearch = record.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.patientId.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' || record.category === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Medical Records</h1>
              <p className="text-gray-600">Manage patient medical records and documentation</p>
            </div>
            <Button className="bg-medical-blue hover:bg-medical-blue/90">
              <Plus className="h-4 w-4 mr-2" />
              New Record
            </Button>
          </div>
        </div>

        <Tabs defaultValue="records" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="records">All Records</TabsTrigger>
            <TabsTrigger value="recent">Recent Activity</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="records">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Filters</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Category</h4>
                      <div className="space-y-2">
                        {['all', 'cardiology', 'laboratory', 'endocrinology', 'emergency'].map((filter) => (
                          <Button
                            key={filter}
                            variant={selectedFilter === filter ? "default" : "outline"}
                            size="sm"
                            className="w-full justify-start capitalize"
                            onClick={() => setSelectedFilter(filter)}
                          >
                            <Filter className="h-4 w-4 mr-2" />
                            {filter === 'all' ? 'All Records' : filter}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Quick Actions</h4>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Calendar className="h-4 w-4 mr-2" />
                          Today's Records
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <User className="h-4 w-4 mr-2" />
                          My Patients
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Records List */}
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Medical Records</CardTitle>
                        <CardDescription>
                          {filteredRecords.length} records found
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            placeholder="Search records..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 w-64"
                          />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {filteredRecords.map((record) => (
                        <div key={record.id} className="border rounded-lg p-4 hover:bg-gray-50">
                          <div className="flex justify-between items-start">
                            <div className="flex items-start space-x-4">
                              <div className="bg-medical-lightBlue p-2 rounded-lg">
                                {getCategoryIcon(record.category)}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  <h3 className="font-medium text-gray-900">{record.patientName}</h3>
                                  <Badge variant="outline" className="text-xs">
                                    {record.patientId}
                                  </Badge>
                                </div>
                                <p className="text-sm text-gray-600 mb-1">{record.diagnosis}</p>
                                <div className="flex items-center space-x-4 text-xs text-gray-500">
                                  <span>{record.recordType}</span>
                                  <span>•</span>
                                  <span>{record.date}</span>
                                  <span>•</span>
                                  <span>{record.doctor}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge className={getStatusColor(record.status)}>
                                {record.status}
                              </Badge>
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4" />
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
          </TabsContent>

          <TabsContent value="recent">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest changes to medical records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <div className="bg-medical-blue p-2 rounded-full">
                        <FileText className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600">Patient: {activity.patient}</p>
                      </div>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Records</p>
                      <p className="text-2xl font-bold text-gray-900">2,847</p>
                      <p className="text-xs text-green-600">+12% from last month</p>
                    </div>
                    <FileText className="h-8 w-8 text-medical-blue" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Pending Review</p>
                      <p className="text-2xl font-bold text-gray-900">23</p>
                      <p className="text-xs text-yellow-600">Needs attention</p>
                    </div>
                    <Activity className="h-8 w-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">This Month</p>
                      <p className="text-2xl font-bold text-gray-900">156</p>
                      <p className="text-xs text-blue-600">New records</p>
                    </div>
                    <Calendar className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Categories</p>
                      <p className="text-2xl font-bold text-gray-900">8</p>
                      <p className="text-xs text-green-600">Active types</p>
                    </div>
                    <Stethoscope className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default MedicalRecords;