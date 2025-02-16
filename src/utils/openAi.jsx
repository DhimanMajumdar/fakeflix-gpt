import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "./constants";

const genAI=new GoogleGenerativeAI(GEMINI_API_KEY);
const model=genAI.getGenerativeModel({model:"gemini-2.0-flash"});

export default model;