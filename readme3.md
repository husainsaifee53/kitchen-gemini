# 🧠 Fridge Feast AI - Hackathon Build Log

> *Hackathon:* Vibe Coding Hackathon  
> *Team:* Solo Build  
> *Time Spent:* ~2 hours  
> *Project Type:* MVP – Minimum Viable Product  
> *Built With:* HTML, TailwindCSS, JavaScript, Serverless Function (Vercel), Gemini API

---

## 🥅 Project Goal

Create a single-page web application named *"Fridge Feast AI"* that allows users to input the ingredients they have on hand and instantly receive *2 creative recipe ideas* powered by *Google Gemini AI*.

This tool helps users:
- Save money 💰
- Reduce food waste ♻
- Get instant, practical cooking ideas 🍲

---

## 👤 Core User Story

> “As a busy person who wants to save money and reduce food waste, I need a quick way to see what meals I can make with the ingredients I already have in my kitchen, so I can get instant, creative cooking ideas without extensive searching.”

---

## 🛠 MVP Core Features

1. *Ingredient Input:* Simple text input field (comma-separated values).
2. *"Find Recipes!" Button:* Triggers AI generation.
3. *Secure Serverless Backend:* Calls Gemini API using a crafted, structured prompt.
4. *Recipe Display:* Clean output rendered in markdown.
5. *Optional:* Veg/Non-Veg mode switch.

---

## 🧠 Prompt Engineering

> The prompt sent to Gemini AI is the heart of the app. It is designed to be specific, clear, and creatively constrained.

### ✅ Final Gemini Prompt Used