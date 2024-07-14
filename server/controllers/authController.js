const { hashPassword, comparePassword } = require('../helper/authHelper');
const UserModel = require('../models/userModel');
const Rating = require('../models/RatingModel');
const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");
const AZURE_OPENAI_ENDPOINT = "https://tourismlocal.openai.azure.com/";
const AZURE_OPENAI_API_KEY = "e41c88740e9d40f9aec7da9a1953f746";
const modelDeployment = "TourMitr";



const registerController = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password, contact, address,interests } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: 'Already registered, please login',
      });
    }

    const hashedPassword = await hashPassword(password);
    const user = await new UserModel({ name, email, contact, address,interests, password: hashedPassword }).save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in registration',
      error
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered"
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid password"
      });
    }
    res.status(200).send({
      success: true,
      message: "Login successfully",
      user: {
        name: user.name,
        email: user.email,
        contact: user.contact,
        address: user.address,
        interests: user.interests,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error
    });
  }
};
// userid ref issue
const ratingController = async (req, res) => {
  try {
    const { userId, placeId, rating } = req.body;

    // Check for missing fields
    if (!userId || !placeId || rating == null) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    // Validate rating
    if (typeof rating !== 'number' || rating < 1 || rating > 5) {
      return res.status(400).json({ success: false, message: 'Invalid rating value' });
    }

    let userRating = await Rating.findOne({ userId, placeId });

    if (userRating) {
      userRating.rating = rating;
      await userRating.save();
    } else {
      const newRating = new Rating({ userId, placeId, rating });
      await newRating.save();
    }

    res.json({ success: true, message: 'Rating submitted successfully' });
  } catch (error) {
    console.error('Error in ratingController:', error.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
  
  const fetchRatingController = async (req, res) => {
    try {
      const { placeId } = req.params;
      const ratings = await Rating.find({ placeId });
      if (ratings.length === 0) {
        return res.json({ averageRating: 0 });
      }
  
      const totalRating = ratings.reduce((acc, cur) => acc + cur.rating, 0);
      const averageRating = totalRating / ratings.length;
  
      res.json({ averageRating });
    } catch (error) {
      res.status(500).send('Server error');
    }
  };



  const recommendationController = async (req, res) => {
    const { userInterests, userCity } = req.body;
    if (!userInterests || !userCity) {
      return res.status(400).send('Interests and city are required');
    }
  
    try {
      const client = new OpenAIClient(
        AZURE_OPENAI_ENDPOINT,
        new AzureKeyCredential(AZURE_OPENAI_API_KEY)
      );
  
      const promptTemplate = `
        Based on the user's interests, recommend 5 places in ${userCity} with 10 words desciption and always give same redommendation:
        Interests: ${userInterests}
        Recommendation:
      `;
  
      const { choices } = await client.getChatCompletions(modelDeployment, [
        { role: "user", content: promptTemplate }
      ]);
  
      res.send(choices[0].message.content);

    } catch (err) {
      console.error("The sample encountered an error:", err);
      res.status(500).send('An error occurred');
    }
  };
  
  
  
  module.exports = { registerController, loginController, ratingController, fetchRatingController , recommendationController};