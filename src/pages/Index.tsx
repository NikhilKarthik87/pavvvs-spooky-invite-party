
import React, { useState, useEffect } from 'react';
import SmokeEffect from '../components/SmokeEffect';
import PartyForm from '../components/PartyForm';
import ThankYou from '../components/ThankYou';
import sendEmail from '../services/EmailService';
import { useToast } from "@/components/ui/use-toast";
import { Skull } from "lucide-react";

interface FormData {
  attending: string;
  food: string;
  customFood: string;
  drink: string;
}

const Index = () => {
  const { toast } = useToast();
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (introComplete) {
      const timer = setTimeout(() => {
        setShowForm(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [introComplete]);

  const handleSmokeComplete = () => {
    setShowIntro(false);
    setIntroComplete(true);
  };

  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const success = await sendEmail(data);
      
      if (success) {
        setIsSubmitted(true);
        toast({
          title: "Success!",
          description: "Your RSVP has been sent!",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send your RSVP. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/30 to-black py-10 px-4">
      {showIntro && <SmokeEffect onComplete={handleSmokeComplete} />}
      
      <div className="max-w-4xl mx-auto">
        <div className={`text-center ${introComplete ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex justify-center mb-4">
            <Skull className="text-halloween-orange h-16 w-16" />
          </div>
          <h1 className="text-5xl sm:text-7xl font-creepster text-white glow-text mb-4">
            Yooo.... Pavvvs
          </h1>
          <p className="text-xl text-halloween-orange font-eater mb-10">
            May 12th, 2025 at 10:00 PM
          </p>
          
          {showForm && !isSubmitted && (
            <div className="mt-10">
              <PartyForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
            </div>
          )}
          
          {isSubmitted && <ThankYou />}
        </div>
      </div>
    </div>
  );
};

export default Index;
