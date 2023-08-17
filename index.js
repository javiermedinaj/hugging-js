import { HfInference } from "@huggingface/inference";
import dotenv from 'dotenv';

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const inference = new HfInference(HF_ACCESS_TOKEN);

// You can also omit "model" to use the recommended model for the task
const model = "nlpconnect/vit-gpt2-image-captioning";
const imageUrl = "https://picsum.photos/id/237/200/300";

const response = await fetch(imageUrl);
const imageBlob = await response.blob();

const result = await inference.imageToText({
    data: imageBlob,
    model: model,
})

console.log(result);