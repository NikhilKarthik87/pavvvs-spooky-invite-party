
interface FormData {
  attending: string;
  food: string;
  customFood: string;
  drink: string;
}

const sendEmail = async (data: FormData): Promise<boolean> => {
  try {
    // Prepare the message body
    const body = JSON.stringify({
      to: "nickiskick@gmail.com",
      subject: "Birthday Party RSVP",
      message: `
        New Party RSVP:
        
        Attending: ${data.attending}
        Food Choice: ${data.food}
        ${data.food === "Others" ? `Custom Food: ${data.customFood}` : ''}
        Drink Choice: ${data.drink}
      `
    });
    
    // In a real app, we'd send this data to a backend service
    // For now, we'll use a mock email service
    // This would be replaced with a real API call

    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Log the data that would be sent
    console.log("Sending email with data:", body);
    
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

export default sendEmail;
