"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';


// 
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  workingWith: string;
}

interface SubmitData extends FormData {
  backup: string;
  selectedDate: string | null;
  selectedTime: string;
}

const SessionAttendanceForm: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2025, 8, 1)); // September 2025
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('12:40');
  const [backupPreference, setBackupPreference] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    workingWith: ''
  });

  const monthNames: string[] = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderCalendar = (): JSX.Element[] => {
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const prevLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    
    const days: JSX.Element[] = [];
    
    // Previous month's trailing days
    const startingDayOfWeek = firstDay.getDay();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const day = prevLastDay.getDate() - i;
      days.push(
        <Button
          key={`prev-${day}`}
          variant="ghost"
          size="sm"
          className="h-9 w-9 p-0 text-muted-foreground"
          disabled
        >
          {day}
        </Button>
      );
    }
    
    // Current month's days
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const isSelected = selectedDate && 
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === currentDate.getMonth() &&
        selectedDate.getFullYear() === currentDate.getFullYear();
        
      days.push(
        <Button
          key={day}
          variant={isSelected ? "default" : "ghost"}
          size="sm"
          className="h-9 w-9 p-0"
          onClick={() => {
            const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            setSelectedDate(newDate);
          }}
        >
          {day}
        </Button>
      );
    }
    
    // Next month's leading days
    const totalCells = days.length;
    const remainingCells = 42 - totalCells;
    for (let day = 1; day <= remainingCells && day <= 14; day++) {
      days.push(
        <Button
          key={`next-${day}`}
          variant="ghost"
          size="sm"
          className="h-9 w-9 p-0 text-muted-foreground"
          disabled
        >
          {day}
        </Button>
      );
    }
    
    return days;
  };

  const navigateMonth = (direction: number): void => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const handleSubmit = (): void => {
    const submitData: SubmitData = {
      ...formData,
      backup: backupPreference,
      selectedDate: selectedDate ? selectedDate.toISOString().split('T')[0] : null,
      selectedTime: selectedTime
    };
    
    console.log('Form submitted with data:', submitData);
    alert('Form submitted successfully! Check console for data.');
    
    // Here you would send to your backend:
    // fetch('/submit-attendance', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(submitData)
    // });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-slate-700">
        <div className="font-bold text-lg">NITE</div>
      </div>

      {/* Main Content */}
      <div className="max-w-lg mx-auto p-6 py-16">
        <h1 className="text-3xl font-semibold text-center mb-12">Session Attendance</h1>
        
        <div className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('firstName', e.target.value)}
                className="bg-transparent border-slate-600 text-white focus:border-blue-500"
                placeholder="Enter first name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('lastName', e.target.value)}
                className="bg-transparent border-slate-600 text-white focus:border-blue-500"
                placeholder="Enter last name"
              />
            </div>
          </div>

          {/* Email and Contact */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('email', e.target.value)}
                className="bg-transparent border-slate-600 text-white focus:border-blue-500"
                placeholder="Enter email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact">Contact Number</Label>
              <Input
                id="contact"
                type="tel"
                value={formData.contact}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('contact', e.target.value)}
                className="bg-transparent border-slate-600 text-white focus:border-blue-500"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          {/* Working With */}
          <div className="space-y-2">
            <Label htmlFor="workingWith">Whom do you prefer working with?</Label>
            <Input
              id="workingWith"
              value={formData.workingWith}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('workingWith', e.target.value)}
              className="bg-transparent border-slate-600 text-white focus:border-blue-500"
              placeholder="Enter preference"
            />
          </div>

          {/* Backup Preference */}
          <div className="space-y-3">
            <Label>Do you prefer to be backup?</Label>
            <RadioGroup
              value={backupPreference}
              onValueChange={setBackupPreference}
              className="flex gap-4"
            >
              <div className="flex-1">
                <Label 
                  htmlFor="yes" 
                  className={`flex items-center justify-center p-4 border border-slate-600 rounded-lg cursor-pointer transition-all hover:border-blue-500 ${backupPreference === 'yes' ? 'border-blue-500 bg-blue-500/10' : ''}`}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <span>Yes</span>
                  </div>
                </Label>
              </div>
              <div className="flex-1">
                <Label 
                  htmlFor="no" 
                  className={`flex items-center justify-center p-4 border border-slate-600 rounded-lg cursor-pointer transition-all hover:border-blue-500 ${backupPreference === 'no' ? 'border-blue-500 bg-blue-500/10' : ''}`}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <span>No</span>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Calendar Section */}
          <div className="space-y-4">
            <Label>Select a Date and Time</Label>
            
            {/* Calendar Header */}
            <div className="flex items-center justify-between px-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => navigateMonth(-1)}
                className="h-9 w-9 bg-slate-700 border-slate-600 hover:bg-slate-600"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h3 className="text-lg font-medium">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => navigateMonth(1)}
                className="h-9 w-9 bg-slate-700 border-slate-600 hover:bg-slate-600"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Calendar */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-4">
                {/* Weekdays */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day: string) => (
                    <div key={day} className="text-xs font-medium text-slate-400 text-center py-2">
                      {day}
                    </div>
                  ))}
                </div>
                
                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-2">
                  {renderCalendar()}
                </div>

                {/* Time Selector */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <Label htmlFor="time">Select Time</Label>
                  </div>
                  <Input
                    id="time"
                    type="time"
                    value={selectedTime}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedTime(e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white focus:border-blue-500"
                  />
                </div>

                {/* Timezone */}
                <div className="mt-4 flex items-center gap-2 p-3 bg-slate-700 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-slate-300">Pacific Time - US & Canada</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Submit Button */}
          <Button onClick={handleSubmit} className="w-full bg-blue-600 hover:bg-blue-700">
            Submit
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-200 text-slate-600 p-10 mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-semibold text-slate-800 mb-4">Contact Us</h3>
            <p className="mb-2">Email: support@gmail.com</p>
            <p className="mb-4">Phone: 000-000-0000</p>
            <div className="flex gap-3">
              <Button variant="secondary" size="icon" className="h-8 w-8">
                <img 
                  src="instagram-icon.png" 
                  alt="Instagram" 
                  className="h-4 w-4" 
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentNode) {
                      (target.parentNode as HTMLElement).innerHTML = '📷';
                    }
                  }}
                />
              </Button>
              <Button variant="secondary" size="icon" className="h-8 w-8">
                <img 
                  src="facebook-icon.png" 
                  alt="Facebook" 
                  className="h-4 w-4" 
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentNode) {
                      (target.parentNode as HTMLElement).innerHTML = '📘';
                    }
                  }}
                />
              </Button>
              <Button variant="secondary" size="icon" className="h-8 w-8">
                <img 
                  src="twitter-icon.png" 
                  alt="Twitter" 
                  className="h-4 w-4" 
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentNode) {
                      (target.parentNode as HTMLElement).innerHTML = '🐦';
                    }
                  }}
                />
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-4">Links</h3>
            <div className="space-y-2">
              <p><a href="#" className="hover:text-blue-600">Home Page</a></p>
              <p><a href="#" className="hover:text-blue-600">About Us</a></p>
              <p><a href="#" className="hover:text-blue-600">Services</a></p>
              <p><a href="#" className="hover:text-blue-600">Contact Us Page</a></p>
              <div className="mt-6 space-y-1">
                <p><a href="#" className="hover:text-blue-600">something.com</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-6 border-t border-slate-300 text-sm">
          <p>Copyright ©2024 All rights reserved | This site is made by the NITE team</p>
        </div>
      </footer>
    </div>
  );
}

export default SessionAttendanceForm;