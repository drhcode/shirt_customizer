import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';
import Configuration from 'openai';

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI(config);

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from main route' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'url',
    });

    const image = response.data.data[0].url;
    restart.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

export default router;
