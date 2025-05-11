
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Ghost, PartyPopper, Skull } from "lucide-react";

interface FormData {
  attending: string;
  food: string;
  customFood: string;
  drink: string;
}

interface PartyFormProps {
  onSubmit: (data: FormData) => void;
  isSubmitting: boolean;
}

const PartyForm: React.FC<PartyFormProps> = ({ onSubmit, isSubmitting }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    attending: "Yoooo Bruh... For Suree.. (I left you no choice 😉)",
    food: "",
    customFood: "",
    drink: "",
  });
  
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.food) {
      toast({
        title: "ಎಚ್ಚರಿಕೆ! (Warning!)",
        description: "Please select what you want to eat!",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.drink) {
      toast({
        title: "ಎಚ್ಚರಿಕೆ! (Warning!)",
        description: "Please select what you want to drink!",
        variant: "destructive",
      });
      return;
    }
    
    onSubmit(formData);
  };

  return (
    <form 
      action="https://formsubmit.co/nickiskick@gmail.com" 
      method="POST"
      onSubmit={handleSubmit} 
      className="space-y-12 max-w-2xl mx-auto"
    >
      {/* Hidden fields for FormSubmit configuration */}
      <input type="hidden" name="_subject" value="Birthday Party RSVP" />
      <input type="hidden" name="_template" value="table" />
      
      <Card className="bg-halloween-dark border border-halloween-purple animate-float spooky-shadow">
        <CardContent className="pt-6">
          <div className="flex items-center mb-4">
            <PartyPopper className="text-halloween-orange mr-2" />
            <h2 className="text-2xl font-creepster text-white glow-text">Are you coming to the Party?</h2>
          </div>
          
          <RadioGroup
            value={formData.attending}
            className="mt-2"
            name="attending"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Yoooo Bruh... For Suree.. (I left you no choice 😉)" id="attending" checked />
              <Label htmlFor="attending" className="text-md font-semibold text-halloween-orange">
                Yoooo Bruh... For Suree.. (I left you no choice 😉)
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card className="bg-halloween-dark border border-halloween-purple animate-float spooky-shadow">
        <CardContent className="pt-6">
          <div className="flex items-center mb-4">
            <Ghost className="text-white mr-2" />
            <h2 className="text-2xl font-creepster text-white glow-text">ನೀವು ಏನು ತಿನ್ನುತ್ತೀರಿ?</h2>
          </div>
          
          <RadioGroup
            value={formData.food}
            onValueChange={(value) => handleChange("food", value)}
            className="mt-2 space-y-2"
            name="food"
          >
            {["Pizza", "Chicken Biryani", "Veg Biryani", "Pasta", "Others"].map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`food-${option}`} />
                <Label htmlFor={`food-${option}`} className="text-md font-semibold text-white">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
          
          {formData.food === "Others" && (
            <div className="mt-4">
              <Label htmlFor="customFood" className="text-white mb-2 block">
                ನೀವು ಇನ್ನೇನು ತಿನ್ನಲು ಬಯಸುತ್ತೀರಿ?
              </Label>
              <Input
                id="customFood"
                name="customFood"
                value={formData.customFood}
                onChange={(e) => handleChange("customFood", e.target.value)}
                className="bg-muted text-white"
              />
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="bg-halloween-dark border border-halloween-purple animate-float spooky-shadow">
        <CardContent className="pt-6">
          <div className="flex items-center mb-4">
            <Skull className="text-halloween-green mr-2" />
            <h2 className="text-2xl font-creepster text-white glow-text">ನೀವು ಏನು ಕುಡಿಯಲು ಬಯಸುತ್ತೀರಿ?</h2>
          </div>
          
          <RadioGroup
            value={formData.drink}
            onValueChange={(value) => handleChange("drink", value)}
            className="mt-2 space-y-2"
            name="drink"
          >
            {["Alcohol", "Wine", "Beer", "Water", "Juice"].map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`drink-${option}`} />
                <Label htmlFor={`drink-${option}`} className="text-md font-semibold text-white">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-halloween-purple hover:bg-purple-700 text-white text-lg font-eater px-8 py-6 animate-pulse-glow"
        >
          {isSubmitting ? "Sending..." : "Submit My Choices"}
        </Button>
      </div>
    </form>
  );
};

export default PartyForm;
