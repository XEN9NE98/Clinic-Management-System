
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const StatsCard = ({ title, value, change, icon: Icon, color }) => {
  const isPositive = change.startsWith('+');
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className={`text-xs ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {change} from last month
            </p>
          </div>
          <div className={`${color}`}>
            <Icon className="h-8 w-8" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
