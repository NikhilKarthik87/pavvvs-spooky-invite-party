
interface FormData {
  attending: string;
  food: string;
  customFood: string;
  drink: string;
}

// When using FormSubmit.co, this function is really just a backup
// in case the form action doesn't work properly
const sendEmail = async (data: FormData): Promise<boolean> => {
  try {
    // FormSubmit.co handling is done via the form's action attribute
    // This is a fallback method that could be used if needed
    
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Log the data that would have been sent
    console.log("Email data (handled via FormSubmit.co):", {
      attending: data.attending,
      food: data.food,
      customFood: data.food === "Others" ? data.customFood : '',
      drink: data.drink
    });
    
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

export default sendEmail;
